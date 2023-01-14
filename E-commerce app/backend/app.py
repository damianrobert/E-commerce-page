import datetime
import json
from flask import Flask, request
from flask_cors import CORS

from repo import CONNECTION_STRING
from account import signup, signin, getUserDetails, get_user_by_email
from user import User



app=Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/', methods=['GET'])    
def get():
    return "<h1>Welcome to my website</h1>"

@app.route('/api/details', methods=['GET'])
def log():
    response = {
        'name': 'my fullstack app',
        'version': 'v0.0.1',
        'last_call': datetime.datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S")
    }
    response = json.dumps(response)
    return response, 200

@app.route('/api/register', methods=['POST'])
def register():
    try:
        body = request.json
        signup(body, CONNECTION_STRING)
        return "{}", 200, {"Content-Type": "application/json"}
    except Exception as e:
        error_message = {
        "error": f"Something went wrong. Cause: {e}"
    }
        response = json.dumps(error_message)
        return response, 400, {"Content-Type": "application/json"}

@app.route('/api/authenticate', methods=['POST'])
def authenticate():
    try:
        body = request.json
        user = signin(body, CONNECTION_STRING)
        return user.to_json(), 200, {'Content-Type': 'application/json'}
    except Exception as e:
        errorMessage= {
            'error': f'Something went wrong. Cause: {e}'
        }
        response = json.dumps(errorMessage)
        return response, 500, {'Content-Type': 'application/json'}
  
    
@app.route('/api/userDetails', methods=['GET'])
def getUser():
    try:
        user = get_user_by_email(user, CONNECTION_STRING)
        response = user.to_json()
        return response, 200, {'Content-Type': 'application/json'}
    except Exception as e:
        errorMessage={
            'error': f'Failed to get user details, Cause: {e}'
        }
        response = json.dumps(errorMessage)
        return response, 500, {'Content-Type': 'application/json'}
    
if __name__ == '__main__':
    app.run(debug=True, port=5555)