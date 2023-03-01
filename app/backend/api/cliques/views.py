from flask import Blueprint, request, jsonify

import requests, json

from . import controllers

from flask_pymongo import ObjectId

from app import bcrypt
from api.cliques.models import Clique

auth = Blueprint('auth', __name__)

# IDEA: FInish writing query string for cliques.
@auth.route('/cliques', methods=['GET'])
def cliques():
    data = request.get_json()
    response = controllers.cliques(data)
    return jsonify(response), response['code']
