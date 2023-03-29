from api.config.databases import sql_db as db
from sqlalchemy.schema import ForeignKey

class Clique(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type_id = db.Column(db.Integer, nullable=False) # 0 for Person; 1 for Organization; etc. 

    def __repr__(self):
        types = {0: "Person", 1: "Organization"}
        return f"Clique {self.id} composed of {types[self.type_id]}s"
    
# At highest level, Clique: id, type (Person, Org, etc.).
# Clique-Type: clique_id, foreign_key.

class Clique_Person(db.Model):
    # id = db.Column(db.Integer, primary_key=True)
    clique_id = db.Column(db.Integer, ForeignKey("clique.id"), nullable=False)
    person_id = db.Column(db.Integer, ForeignKey("person.id"), nullable=False)

    def __repr__(self):
        return f"Clique {self.clique_id} includes Person {self.person_id}"
    

class Clique_Organization(db.Model):
    # id = db.Column(db.Integer, primary_key=True)
    clique_id = db.Column(db.Integer, ForeignKey("clique.id"), nullable=False)
    organization_id = db.Column(db.Integer, ForeignKey("organization.id"), nullable=False)

    def __repr__(self):
        return f"Clique {self.clique_id} includes Organization {self.organization_id}"
    