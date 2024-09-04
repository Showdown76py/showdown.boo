import flask, os, dotenv
from flask import request, jsonify, render_template

dotenv.load_dotenv()
app = flask.Flask(__name__, static_folder='static', static_url_path='/static')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/robots.txt')
def robots():
    return app.send_static_file('robots.txt')

if __name__ == '__main__':         
    print('OK')                                                                                                                                                                                 
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT")), debug=1, threaded=True)
