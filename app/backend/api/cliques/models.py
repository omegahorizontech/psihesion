from api.config.configurations import BCRYPT_LOG_ROUNDS, SECRET_KEY
from app import bcrypt

import jwt
from datetime import datetime, timedelta

class Clique():
    """Store clique details"""
    # Get Org-Locs, Person-Locs, Person-Orgs
    # Each of the id's in these sets become our set of vertices.
    def to_json(self):
        pass 
