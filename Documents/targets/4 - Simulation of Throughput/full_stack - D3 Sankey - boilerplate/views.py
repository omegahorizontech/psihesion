# Flask View
# sankeys/views.py

from flask import Blueprint, request, jsonify

from . import controllers

import requests, json

sankeys = Blueprint('sankeys', __name__)

@sankeys.route('/<filename>/', methods=['GET'])
def get_sankey(filename=None):
    return jsonify({
        "data": controllers.get_sankey(filename)
    })