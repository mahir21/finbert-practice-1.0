# app.py

from flask import Flask, request, jsonify, session, redirect, url_for
from flask_cors import CORS
from Flask_app.Analysis import perform_analysis
from login import login_user
from register import register_user
from logout import logout_user
from backend.config import SECRET_KEY

app = Flask(__name__)
CORS(app)

# Set the secret key for session management
app.secret_key = SECRET_KEY

@app.route('/prediction', methods=['GET'])
def index():
    if 'username' in session:
        # User is logged in, show home page
        data = request.get_json()
        selected_dataset = data.get('dataset')
        selected_model = data.get('model')
        analysis_results = perform_analysis(selected_dataset, selected_model)
        return jsonify(analysis_results)
    else:
        # User is not logged in, redirect to login page
        return redirect(url_for('login'))


if __name__ == '__main__':
    app.run(debug=True)
