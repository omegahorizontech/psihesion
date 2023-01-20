from flask import Blueprint, request, jsonify

import requests, json

from . import controllers

from api.config import configurations

profiles = Blueprint('profiles', __name__)

@profiles.route('/<id>/', methods=['GET'])
def get_profile(id=None):
    return jsonify(controllers.get_profile(id))

@profiles.route('/', methods=['GET'])
def get_profiles(id=None):
    query = {}
    return jsonify(controllers.get_profiles(query))
