from flask import Blueprint, request, jsonify
from pipes.clique_finder import maximal_clique

import requests, json

from . import controllers

from flask_pymongo import ObjectId

from app import bcrypt
from api.cliques.models import Clique

cliques = Blueprint('cliques', __name__)

# IDEA: FInish writing query string for cliques.
@cliques.route('/', methods=['GET'])
def get_max_clique():
    # data = request.get_json()
    max_clique = maximal_clique()
    response = (len(max_clique), list(max_clique))
    return jsonify(response)
