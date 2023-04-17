from flask import Blueprint
from flask import request
from flask import jsonify
# from classes.Person import Person
from classes.Location import Location
from classes.Junctions import Person_Location
from sqlalchemy import Select
from api.config.databases import sql_db
import math as m


def haversine_distance(lat1, lon1, lat2, lon2):
    p = m.pi/180
    a = 0.5 - m.cos((lat2-lat1)*p)/2 + m.cos(lat1*p) * m.cos(lat2*p) * (1-m.cos((lon2-lon1)*p))/2
    # Radius of Earth = 6371 km
    return 12742 * m.asin(m.sqrt(a)) / 1.60934 #2*R*asin...

def l2_distance(person_1, person_2):
    loc_ids = []
    locs = []

    for person in [person_1, person_2]:
        result = sql_db.session.scalars(Select(Person_Location).where(Person_Location.person_id == person)).all()[0]
        loc_ids.append(result.location_id)

    for loc in loc_ids:
        locs.append(Location.query.get(loc))

    coords = [(loc.latitude, loc.longitude) for loc in locs]
    return haversine_distance(*coords[0], *coords[1])

# Setup Endpoints

distance = Blueprint('distance', __name__)

@distance.route('/', methods=['GET'])
def return_distance():
    # e.g., .../distance/?person1=382&person2=477
    person_1 = request.args.get("person1") 
    person_2 = request.args.get("person2")
    return jsonify(l2_distance(person_1, person_2))