from flask import Flask
from flask_bcrypt import Bcrypt
from flask_cors import CORS
# from pipes import loader


app = Flask(__name__)

cors = CORS(app, resources={r"/*": {"origins": "*"}}) # IDEA: Change to allow only certain IP addresses - depending on use case.

bcrypt = Bcrypt(app)

# loader.load()


@app.route('/')
def home_page():

    return 'Omega Horizon'
