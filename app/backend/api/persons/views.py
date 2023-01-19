from flask import Blueprint, request, jsonify

import requests, json

from . import controllers

from api.config import configurations

persons = Blueprint('persons', __name__)

@persons.route('/<id>/', methods=['GET'])
def get_person(id=None):
    return jsonify(controllers.get_person(id))

@persons.route('/', methods=['GET'])
def get_persons(id=None):
    query = {}
    return jsonify(controllers.get_persons(query))
