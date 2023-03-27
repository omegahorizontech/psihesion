from flask import Blueprint, request, jsonify
# from pipes.clique_finder import maximal_clique

import requests, json

from . import controllers

from flask_pymongo import ObjectId

from app import bcrypt
from api.cliques.models import Clique
from api.cliques.controllers import maximal_clique
from api.cliques.controllers import person_cliques

cliques = Blueprint('cliques', __name__)

@cliques.route('/', methods=['GET'])
def get_max_clique():
    return jsonify(maximal_clique())
 
#  cliques/ --get all cliques, for persons, orgs, etc.?
@cliques.route("/persons/", methods=["GET"])
def get_person_cliques():
    results = [list(clique) for clique in person_cliques()]
    return jsonify(results)

# cliques/?id=##&type=[LOC, PERSON, ORG]&find=[LOC, PERSON, ORG]

# params: given_type (LOC, PERSON, ORG); given_id;
# type_to_find (LOC, PERSON, ORG) (must differ from given type);
# 