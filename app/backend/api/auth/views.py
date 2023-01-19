from flask import Blueprint, request, jsonify

import requests, json

from . import controllers

from flask_pymongo import ObjectId

from app import bcrypt
from api.users.models import User, BlacklistToken

auth = Blueprint('auth', __name__)

@auth.route('/', methods=['POST'])
def login():
    data = request.get_json()
    response = controllers.login(data)
    return jsonify(response), response['code']
