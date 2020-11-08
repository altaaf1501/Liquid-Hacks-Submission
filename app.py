from flask import Flask, render_template, request

app = Flask(__name__, template_folder="templates")



@app.route('/')
def index():
    return render_template('index.html')

@app.route('/index/')
def home():
    return render_template('index.html')

@app.route('/contact/')
def contact():
    return render_template('contact.html')

@app.route('/session/')
def session():
    return render_template('session.html')


if __name__ =='__main__':
    app.run(__debug__==True)
