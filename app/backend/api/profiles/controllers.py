from flask import Blueprint

import requests, json
from pprint import pprint

# from api.config.databases import neo_g
from api.config.configurations import profiles_collection
from bson import json_util

# Mock Data
from pipes import mock_data_to_class

def get_profile(id):
    return "Not Implemented"

def get_profiles(query):
    # IDEA: Refactor mock data when shifting to database
    return {
        "nodes": mock_data_to_class.load()
    }