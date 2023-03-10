from flask import Blueprint
from flask import request
from flask import jsonify
from classes import Person
from classes import Location
from classes import Person_Location

# Calculate the L2 distance between two locations given their names.
# Lookup the names.
# Find their (lat, long) coordinates.
# Return the Euclidean or L2 distance between them. 

def l2_distance(person_1, person_2):
    loc_1 = Person_Location.query.get(person_id=person_1)
    loc_2 = Person_Location.query.get(person_id=person_2) 
    # IDEA: grab the locations for both the above person-locations
    pass 

distance = Blueprint('distance', __name__)

@distance.route('/', methods=['GET'])
def return_distance():
    # e.g., .../distance/?person1=382&person2=477
    person_1 = request.args.get("person1") 
    person_2 = request.args.get("person2")
    return jsonify(l2_distance(person_1, person_2))