import flask, os, dotenv
from flask import request, jsonify, render_template

dotenv.load_dotenv()
app = flask.Flask(__name__, static_folder='static', static_url_path='/static')

@app.route('/')
def index():
    theme = request.cookies.get('theme')
    return render_template('index.html', theme=theme)

@app.route('/projects')
def projects():
    theme = request.cookies.get('theme')
    return render_template('projects.html', theme=theme)

@app.route('/robots.txt')
def robots():
    return app.send_static_file('robots.txt')

if __name__ == '__main__':         
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT")), debug=1, threaded=True)
