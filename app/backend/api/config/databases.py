import os
import pathlib
from app import app
from flask_pymongo import PyMongo
# from py2neo import Graph

from flask_sqlalchemy import SQLAlchemy
# from sqlalchemy.sql import func 

app.config["MONGO_URI"] = "mongodb://localhost:27017/omega"
omega_db = PyMongo(app)

# Create an object for the SQL DB
basedir = pathlib.Path("../..")
app.config["SQL_DB_URI"] = f"sqlite:///{os.path.join(basedir, 'database.db')}"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
sql_db = SQLAlchemy(app)

# neo_g = Graph("http://neo4j:admin@0.0.0.0:7474/db/data/")
