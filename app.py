from flask import Flask, render_template, request
import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense
import matplotlib.pyplot as plt
import io
import base64

import matplotlib
matplotlib.use('Agg')  # Use the 'Agg' backend for matplotlib

app = Flask(__name__)

def calculate_sentiment_counts(df):
    # Calculate counts of each sentiment category
    sentiment_counts = df['Sentiment'].value_counts()
    neutral_count = sentiment_counts.get('Neutral', 0)
    positive_count = sentiment_counts.get('Positive', 0)
    negative_count = sentiment_counts.get('Negative', 0)
    return neutral_count, positive_count, negative_count

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        selected_dataset = request.form['dataset']
        selected_model = request.form['model']

        # Load dataset
        df = pd.read_csv(f'dataset/{selected_dataset}')

        # Preprocess data
        df['Date'] = pd.to_datetime(df['Date'], dayfirst=True)
        df['Vol.'] = df['Vol.'].replace('[KMB]+$', '', regex=True).astype(float) * df['Vol.'].str.extract(r'[\d\.]+([KMB]+)', expand=False).fillna(1).replace(['K','M', 'B'], [10**3, 10**6, 10**9]).astype(int)

        # Select relevant features for modeling
        df_filtered = df[['Open', 'Price', 'High', 'Low', 'Vol.', 'Sentiment']]

        # Normalize data (excluding 'Date' column)
        scaler = MinMaxScaler()
        scaled_data = scaler.fit_transform(df_filtered[['Open', 'Price', 'High', 'Low', 'Vol.']])

        X = scaled_data[:, :-1]  # Features (excluding 'Sentiment')
        y = scaled_data[:, 0]    # Target: 'Open' price

        # Split data into training and testing sets
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

        # Build LSTM model
        model = Sequential([
            LSTM(50, input_shape=(X_train.shape[1], 1)),
            Dense(1)
        ])
        model.compile(optimizer='adam', loss='mean_squared_error')

        # Train model
        history = model.fit(X_train[:,:,np.newaxis], y_train, epochs=50, batch_size=32, validation_split=0.1, verbose=1)

        # Make predictions
        y_pred = model.predict(X_test[:,:,np.newaxis])

        # Inverse transform predictions to original scale
        y_pred_inv = scaler.inverse_transform(np.hstack((y_pred, np.zeros((y_pred.shape[0], 4)))))[:, 0]
        y_test_inv = scaler.inverse_transform(np.hstack((y_test.reshape(-1, 1), np.zeros((y_test.shape[0], 4)))))[:, 0]

        neutral_count, positive_count, negative_count = calculate_sentiment_counts(df)

        # Plot actual vs. predicted values
        fig, ax = plt.subplots(figsize=(12, 6))
        ax.plot(y_test_inv, label='Actual Open Prices', color='blue')
        ax.plot(y_pred_inv, label=f'Predicted Open Prices ({selected_model})', color='red')
        ax.set_title(f'Stock Price Prediction using {selected_model}')
        ax.set_xlabel('Date')
        ax.set_ylabel('Stock Price')
        ax.legend()

        # Save plot to memory buffer
        buf = io.BytesIO()
        plt.savefig(buf, format='png')
        buf.seek(0)
        plt.close(fig)  # Close the figure to free up resources

        # Encode plot image to base64 string
        plot_url = base64.b64encode(buf.getvalue()).decode('utf-8')

        return render_template('plot.html', plot_url=plot_url, selected_model=selected_model,
                               neutral_count=neutral_count, positive_count=positive_count,
                               negative_count=negative_count)
    else:
        return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
