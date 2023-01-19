from flask import Blueprint, request, jsonify

import requests, json

from . import controllers
from api.auth.controllers import auth_wrapper

from flask_pymongo import ObjectId

users = Blueprint('users', __name__)

@users.route('/', methods=['GET'])
def get_users():
    query = {}
    return auth_wrapper(request, controllers.get_users(query))

@users.route('/<_id>/', methods=['GET'])
def get_user(_id=None):
    return auth_wrapper(request, controllers.get_user(_id))

@users.route('/', methods=['POST'])
def save_user():
    data = request.get_json()
    response = controllers.save_user(data)
    return jsonify(response), response['code']

@users.route('/', methods=['DELETE'])
def delete_user():
    data = request.get_json()
    return auth_wrapper(request, controllers.delete_user(data))
