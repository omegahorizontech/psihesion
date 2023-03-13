from dataclasses import dataclass
from api.config.databases import sql_db as db
from sqlalchemy.schema import ForeignKey

# Junction, Association, Intersection, Join, or Link tables go here, 
# e.g., the cross product of PERSON and LOCATION tables. 

class Person_Location(db.Model):
    # Outer Product of Person and Location
    id = db.Column(db.Integer, primary_key=True)
    person_id = db.Column(db.Integer, ForeignKey("person.id"), nullable=False)
    location_id = db.Column(db.Integer, ForeignKey("location.id"), nullable=False)
    # name = db.Column(db.String(100))
    # org_type = db.Column(db.String(100))
    # phone_num = db.Column(db.Integer)

    def __repr__(self):
        return f"Person {self.person_id} at Location {self.location_id} {self.id}"