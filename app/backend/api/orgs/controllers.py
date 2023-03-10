from flask import Blueprint

import requests, json
from pprint import pprint

from bson import json_util

from classes.Organization import Organization

def get_org(id):
    return Organization.query.get(id)


def get_orgs(query):
    orgs = Organization.query.all()
    # print(dir(persons))
    return {i: str(x) for i, x in enumerate(orgs)}