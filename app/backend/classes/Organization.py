from dataclasses import dataclass
from api.config.databases import sql_db as db

class Organization(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    org_type = db.Column(db.String(100))
    phone_num = db.Column(db.Integer)

    def __repr__(self):
        return f"Organization {self.name} {self.org_type} {self.id}"