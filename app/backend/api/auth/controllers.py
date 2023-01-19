from flask import Blueprint, jsonify

import requests, json

from app import bcrypt
from api.config.databases import omega_db
from api.config.configurations import users_collection
from flask_pymongo import ObjectId
from bson import json_util

from api.users.models import User
from api.users.controllers import get_user_by_email

def check_auth(request):
    response = {}
    auth_token = ''
    auth_header = request.headers.get('Authorization')
    if auth_header:
        try:
            auth_token = auth_header.split(" ")[1]
        except IndexError:
            response = {
                'error': 'Token malformed.',
                "code": 400,
            }

    if auth_token:
        message = User.decode_auth_token(auth_token)
        if message[0] == 'Success':
            response = {
                'message': 'Valid token',
                "code": 200,
            }
        else:
            response = {
                'error': message[1]
            }
    else:
        response = {
            'error': 'Auth token missing',
            "code": 400,
        }

    return response

# Handle the if/else as a distinct clear function
def auth_wrapper(request, method):
    auth = check_auth(request) # Checks for a valid 'Authorization' Header with a valid token
    if 'message' in auth:
        return jsonify(method)
    else:
        return jsonify(auth)

def login(content):

    # IDEA: Try to check if collections exist on app start
    try:
        omega_db.db.create_collection(users_collection)
    except Exception as e:
        print(e)

    collection = omega_db.db[users_collection]

    # Validation
    # - checks 'email' and 'password' fields
    # - checks for duplicate email in mongo
    if 'email' not in content:
        return {"error": 'An E-mail address is required', "code": 401}
    elif content['email'] == None or len(content['email']) == 0:
        return {"error": 'An E-mail address is required', "code": 401}
    elif content['password'] == None:
        return {"error": 'A password is required', "code": 401}
    elif 'password' not in content or len(content['password']) == 0:
        return {"error": 'A password is required', "code": 401}
    else:
        user = get_user_by_email(content['email'])
        if user:
            valid_password = bcrypt.check_password_hash(user['password'], content['password'])
            if valid_password:
                new_user_id = str(user['_id'])
                auth_token = User(user).encode_auth_token(new_user_id)
                return {
                    "message": 'Welcome back!',
                    "token": auth_token,
                    "full_name": user['full_name'],
                    "code": 200,
                }

        return {
            "error": 'The E-mail and password do not match',
            "code": 401,
        }
