from dataclasses import dataclass
from app.backend.api.config.databases import sql_db as db

# @dataclass()
# class Person:
#     id: int
#     first_name: str
#     last_name: str
#     primary_organization: str
#     primary_role: str
#     primary_location: str
#     primary_program: str
#     primary_project: str
#     phone: str
#     email: str
#     website: str
#     affinities: str
#     memes: str
#     topics: str
#     organizations: str
#     relationships: str
#     similar_nodes: str
#     programs: str
#     projects: str
#     psihesion_qualities: str
#     roles: str
#     beliefs: str
#     emotions: str
#     skills: str
#     events: str
#     locations: str
#     food: str
#     health_care: str
#     education: str
#     vocation: str
#     services: str
#     housing: str
#     entertainment: str
#     technology: str

class Person(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100))
    last_name = db.Column(db.String(100))
    