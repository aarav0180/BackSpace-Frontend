from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/profile')
def my_profile():
    return 'This is my profile page!'