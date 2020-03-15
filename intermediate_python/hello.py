from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def hello_world():
  name = "Nina"
  return render_template("index.html", name=name)

@app.route("/french")
def bonjour_world():
  return "Bonjour, World!"

@app.route("/name/<name>")
def hello_name(name):
  return f"Hello, {name}"


# Run this to start flask development server:
# FLASK_APP=hello.py flask run

# For live reloading:
# FLASK_APP=hello.py FLASK_ENV=development flask run   

# Windows?
# $env:FLASK_APP = 'hello.py'; $env:FLASK_ENV = 'development'; flask run