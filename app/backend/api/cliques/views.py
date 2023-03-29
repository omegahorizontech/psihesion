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

@cliques.route('/max', methods=['GET'])
def get_max_clique():
    return jsonify(maximal_clique())
 
#  cliques/ --get all cliques, for persons, orgs, etc.?
# @cliques.route("/persons/", methods=["GET"])
# def get_person_cliques():
#     results = [list(clique) for clique in person_cliques()]
#     return jsonify(results)

# cliques/?id=##&type=[LOC, PERSON, ORG]&find=[LOC, PERSON, ORG]
@cliques.route("/", methods=["GET"])
def get_cliques():
    """Get cliques composed of a specified type of entity. 
    If ID is provided, returns cliques including the specified node.
    If 'find' is provided, return cliques of that type which
    intersect with the given node ID and type."""
    node_type = request.args.get("type")
    node_id = request.args.get("id")
    type_to_find = request.args.get("find")
    cliques = []
    
    # if node_type and node_id and type_to_find: 
    # find all cliques of a given type which intersect a given node. 

    # if node_type and node_id:
    # find all cliques which include a given node. 

    # If node_type:
    # find all cliques of a given type. 
    return jsonify(cliques) 


# params: given_type (LOC, PERSON, ORG); given_id;
# type_to_find (LOC, PERSON, ORG) (must differ from given type);
# 