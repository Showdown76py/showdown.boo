import flask, os, dotenv
from flask import request, jsonify, render_template

dotenv.load_dotenv()
app = flask.Flask(__name__, static_folder='static', static_url_path='/static')

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':                                                                                                                                                                                          
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT")), threaded=True)
