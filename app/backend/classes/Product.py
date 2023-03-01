from dataclasses import dataclass
from api.config.databases import sql_db as db

# @dataclass()
# class Product:
#     id: int
#     name: str
    

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))

    def __repr__(self):
        return f"Product {self.name} {self.id}"