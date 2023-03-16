from dataclasses import dataclass
from api.config.databases import sql_db as db
from sqlalchemy.schema import ForeignKey

# Junction, Association, Intersection, Join, or Link tables go here, 
# e.g., the cross product of PERSON and LOCATION tables. 

class Person_Location(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    person_id = db.Column(db.Integer, ForeignKey("person.id"), nullable=False)
    location_id = db.Column(db.Integer, ForeignKey("location.id"), nullable=False)

    def __repr__(self):
        return f"Person {self.person_id} at Location {self.location_id} {self.id}"
    
class Organization_Location(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    organization_id = db.Column(db.Integer, ForeignKey("organization.id"), nullable=False)
    location_id = db.Column(db.Integer, ForeignKey("location.id"), nullable=False)

    def __repr__(self):
        return f"Organization {self.organization_id} at Location {self.location_id} {self.id}"
    
class Person_Organization(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    person_id = db.Column(db.Integer, ForeignKey("person.id"), nullable=False)
    organization_id = db.Column(db.Integer, ForeignKey("organization.id"), nullable=False)

    def __repr__(self):
        return f"Person {self.person_id} at Organization {self.organization_id} {self.id}"