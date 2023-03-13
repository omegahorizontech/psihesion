from dataclasses import dataclass
from api.config.databases import sql_db as db

# @dataclass()
# class Location:
#     id: int
#     latitude: float
#     longitude: float
#     name: str

class Location(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)
    
    def __repr__(self):
        return f"Location {self.name} at {(self.longitude, self.latitude)} with id {self.id}"