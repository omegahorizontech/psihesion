from flask import Blueprint, request, jsonify

import requests, json

from . import controllers

from api.config import configurations

orgs = Blueprint('orgs', __name__)


# IDEA: Create a separate mvc for Orgs.
@orgs.route('/<id>/', methods=['GET'])
def get_profile(id=None):
    return jsonify(controllers.get_org(id))

@orgs.route('/', methods=['GET'])
def get_profile(id=None):
    query = {}
    return jsonify(controllers.get_orgs(query))