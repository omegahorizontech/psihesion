from app import app
from flask_pymongo import PyMongo
# from py2neo import Graph

app.config["MONGO_URI"] = "mongodb://localhost:27017/omega"
omega_db = PyMongo(app)

# neo_g = Graph("http://neo4j:admin@0.0.0.0:7474/db/data/")
