from flask import Blueprint

import requests, json

from api.config.databases import omega_db
from api.config.configurations import users_collection
from flask_pymongo import ObjectId
from bson import json_util

from .models import User

def save_user(content):

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
    elif get_user_by_email(content['email']) != None:
        return {"error": 'This E-mail address is not available', "code": 401}
    else:
        new_user = User(content).to_json()
        collection.insert(new_user)

        # The user gets a token after creating a record in mongo
        authenticated_user = get_user_by_email(new_user['email'])
        new_user_id = str(authenticated_user['_id'])
        auth_token = User(new_user).encode_auth_token(new_user_id)
        return {
            "message": 'Welcome, thanks for signing up!',
            "token": auth_token,
            "code": 200,
        }

def get_user(_id):
    cursor = None
    try:
        query = {
            "_id": ObjectId(_id),
        }
        cursor = omega_db.db[users_collection].find(query);
        if cursor:
            return json.loads(json_util.dumps(cursor[0]))
        else:
            return {"message": 'The database is empty'}
    except Exception as e:
        print (e)
        return {"message": 'The database is empty'}

def get_user_by_email(email):
    cursor = None
    try:
        query = {
            "email": email,
        }
        user = omega_db.db[users_collection].find_one(query);
        if user:
            return user
        else:
            return None
    except Exception as e:
        print (e)
        return {"message": 'The database is empty'}

def get_users(query):

    data = []
    cursor = omega_db.db[users_collection].find(query);

    for i in cursor:
        data.append(i);
    if len(data) > 0:
        return json.loads(json_util.dumps(data))
    else:
        return {"message": 'The database is empty'}

def delete_user(query):

    data = []
    cursor = omega_db.db[users_collection].remove(query);

    return {"message": 'Record Deleted'}
