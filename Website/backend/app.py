from flask import Flask, request, jsonify, session
from flask_cors import CORS
from pymongo import MongoClient
from werkzeug.security import generate_password_hash, check_password_hash
from flask_session import Session
import os
import sys
print("Current working directory:", os.getcwd())
print("sys.path:", sys.path)
import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, GRU, Dense
import matplotlib.pyplot as plt
import io
import base64

# Use non-interactive Agg backend for matplotlib
import matplotlib
matplotlib.use('Agg')

app = Flask(__name__)

# Allowing all origins for simplicity (adjust in production)
CORS(app, supports_credentials=True, resources={r"/*": {"origins": "*", "methods": ["GET", "POST", "OPTIONS"]}})

app.config.from_object('config')

# MongoDB setup
client = MongoClient(app.config['MONGO_URI'])
db = client['login_register']
users_collection = db['users']

# Flask-Session setup
app.config['SECRET_KEY'] = app.config['SECRET_KEY']
app.config['SESSION_TYPE'] = 'filesystem'
Session(app)

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    if not data:
        return jsonify({'message': 'Request body must be JSON'}), 415

    username = data.get('username')
    password = data.get('password')

    if users_collection.find_one({'username': username}):
        return jsonify({'message': 'User already exists'}), 400

    hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
    users_collection.insert_one({'username': username, 'password': hashed_password})

    return jsonify({'message': 'User registered successfully'}), 200

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    if not data:
        return jsonify({'message': 'Request body must be JSON'}), 415

    username = data.get('username')
    password = data.get('password')

    user = users_collection.find_one({'username': username})
    if user and check_password_hash(user['password'], password):
        session['user'] = {'username': user['username']}
        return jsonify({'username': user['username']}), 200

    return jsonify({'message': 'Invalid username or password'}), 401

@app.route('/logout', methods=['POST'])
def logout():
    session.pop('user', None)
    return jsonify({'message': 'Logged out successfully'}), 200

@app.route('/check_login', methods=['GET'])
def check_login():
    if 'user' in session:
        return jsonify({'user': session['user']}), 200
    return jsonify({'message': 'Not logged in'}), 401

def plot_to_base64(plt):
    buf = io.BytesIO()
    plt.savefig(buf, format='png')
    buf.seek(0)
    plt.close()  # Close the figure explicitly
    return base64.b64encode(buf.getvalue()).decode('utf-8')

def preprocess_data(df):
    # Convert Date column to datetime
    df['Date'] = pd.to_datetime(df['Date'], format='%Y-%m-%d', dayfirst=True)
    
    # Convert 'Vol.' column to numeric
    df['Vol.'] = df['Vol.'].replace('[KMB]+$', '', regex=True).astype(float) * df['Vol.'].str.extract(r'[\d\.]+([KMB]+)', expand=False).fillna(1).replace(['K','M', 'B'], [10**3, 10**6, 10**9]).astype(int)
    
    return df

def create_sequences(data, n_steps):
    X, y = [], []
    for i in range(len(data) - n_steps):
        X.append(data[i:(i + n_steps)])
        y.append(data[i + n_steps, 0])  # Predicting the 'Open' price
    return np.array(X), np.array(y)

def calculate_sentiment_counts(df):
    # Calculate counts of each sentiment category
    sentiment_counts = df['Sentiment'].value_counts()
    neutral_count = sentiment_counts.get('Neutral', 0)
    positive_count = sentiment_counts.get('Positive', 0)
    negative_count = sentiment_counts.get('Negative', 0)
    return int(neutral_count), int(positive_count), int(negative_count)  # Convert to int

@app.route('/', methods=['POST'])
def index():
    data = request.get_json()
    selected_dataset = data['dataset']
    selected_model = data['model']

    # Load dataset
    df = pd.read_csv(f'dataset/{selected_dataset}')
    df = preprocess_data(df)

    # Select relevant features for modeling
    df_filtered = df[['Open', 'Price', 'High', 'Low', 'Vol.']]

    # Normalize data (excluding 'Date' column)
    scaler = MinMaxScaler()
    scaled_data = scaler.fit_transform(df_filtered)

    # Define input sequence length
    n_steps = 10

    # Create sequences
    X, y = create_sequences(scaled_data, n_steps)
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Build LSTM or GRU model based on selected option
    if selected_model.lower() == 'lstm':
        model = Sequential([
            LSTM(50, input_shape=(X_train.shape[1], X_train.shape[2])),
            Dense(1)
        ])
    elif selected_model.lower() == 'gru':
        model = Sequential([
            GRU(50, input_shape=(X_train.shape[1], X_train.shape[2])),
            Dense(1)
        ])

    model.compile(optimizer='adam', loss='mean_squared_error')

    # Train model
    history = model.fit(X_train, y_train, epochs=50, batch_size=32, validation_split=0.1, verbose=1)

    # Make predictions
    y_pred = model.predict(X_test)

    # Inverse transform predictions to original scale
    y_pred_inv = scaler.inverse_transform(np.hstack((y_pred, np.zeros((y_pred.shape[0], 4)))))[:, 0]
    y_test_inv = scaler.inverse_transform(np.hstack((y_test.reshape(-1, 1), np.zeros((y_test.shape[0], 4)))))[:, 0]

    # Calculate sentiment counts
    neutral_count, positive_count, negative_count = calculate_sentiment_counts(df)

    # Plot actual vs. predicted values
    plt.figure(figsize=(12, 6))
    plt.plot(y_test_inv, label='Actual Open Prices', color='blue')
    plt.plot(y_pred_inv, label=f'Predicted Open Prices ({selected_model.upper()})', color='red')
    plt.title(f'Stock Price Prediction using {selected_model.upper()}')
    plt.xlabel('Date')
    plt.ylabel('Stock Price')
    plt.legend()

    # Convert plot to base64
    plot_url = plot_to_base64(plt)

    return jsonify({
        'plot_url': plot_url,
        'sentiment_counts': {
            'neutral': neutral_count,
            'positive': positive_count,
            'negative': negative_count
        }
    })

if __name__ == '__main__':
    app.run(debug=True)
