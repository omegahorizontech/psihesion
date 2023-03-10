from flask import Blueprint

import requests, json
from pprint import pprint

from bson import json_util

from classes.Product import Product

def get_product(id):
    return Product.query.get(id)

def get_products(query):
    products = Product.query.all()
    # print(dir(persons))
    return {i: str(x) for i, x in enumerate(products)}