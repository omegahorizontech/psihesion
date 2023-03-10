from flask import Blueprint, request, jsonify

import requests, json

from . import controllers

from api.config import configurations

products = Blueprint('products', __name__)

@products.route('/<id>/', methods=['GET'])
def get_profile(id=None):
    return jsonify(controllers.get_product(id))

@products.route('/', methods=['GET'])
def get_profile(id=None):
    query = {}
    return jsonify(controllers.get_products(query))