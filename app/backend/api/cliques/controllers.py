from flask import Blueprint, jsonify

import requests, json

from app import bcrypt
from api.config.databases import omega_db
from api.config.configurations import users_collection
from flask_pymongo import ObjectId
from bson import json_util

from api.cliques.models import Clique

from classes.Junctions import Person_Location
from classes.Junctions import Person_Organization
from classes.Junctions import Organization_Location
from classes.Junctions import Person_Person

import random
import numpy as np
import logging

# Find the cliques which a given node is part of. 
# neighbors = {}
def bron_kerbosch_cliques(R, P, X, neighbors):
    """Bron-Kerbosch algorithm using a pivot to find a maximal subgraph
    or clique within a set of vertices.
    ::param R: set of vertices found to be be clique members
    ::param P: set of all vertices in the graph to analyze
    ::param X: set of vertices excluded from clique
    ::param neighbors: lookup for neighbors of vertex v
    ::returns: List of Sets of vertices found to be maximal subgraph members.
    ::rtype: List
    """
    if not P and not X:
        return R
    
    pivot = random.choice(tuple(P.union(X)))
     
    results = [{}]
    for v in P.difference(neighbors[pivot]):
        logging.debug(f"We runnin' wit {len(R)}")
        # results.append()
        results += [bron_kerbosch(R.union({v}), P.intersection(neighbors[v]), X.intersection(neighbors[v]), neighbors)]
        P = P.difference({v})
        X = X.union({v})
    results = list(filter(lambda x: len(x) > 0, results))

    return results

# IDEA: Use degeneracy ranking to improve speed even more. 
def bron_kerbosch(R, P, X, neighbors):
    """Bron-Kerbosch algorithm using a pivot to find a maximal subgraph
    or clique within a set of vertices.
    ::param R: set of vertices found to be be clique members
    ::param P: set of all vertices in the graph to analyze
    ::param X: set of vertices excluded from clique
    ::param neighbors: lookup for neighbors of vertex v
    ::returns: set of vertices found to be maximal subgraph members.
    ::rtype: Set
    """
    if not P and not X:
        return R
    
    u = random.choice(tuple(P.union(X))) # Pivot
    
    results = [{}]
    for v in P.difference(neighbors[u]):
        logging.debug(f"We runnin' wit {len(R)}")
        results.append(bron_kerbosch(R.union({v}), P.intersection(neighbors[v]), X.intersection(neighbors[v]), neighbors))
        P = P.difference({v})
        X = X.union({v})

    result_sizes = [len(r) for r in results]
    return results[np.argmax(result_sizes)]

def expand_neighbors(edge, neighbors):
    """Helper function for building a graph neighbor lookup."""
    neighbors[edge[0]].update({edge[1]})
    neighbors[edge[1]].update({edge[0]})
    return

def build_graph(edges):
    """Given a List of edges, build a neighbor lookup and Set of 
    vertices in the graph
    ::param edges: List of all edges in the graph as vertex tuples, e.g., (v1, v2)
    ::returns: The set of vertices in the graph and a neighbor dictionary
    ::rtype: Tuple of (Set, Dict)"""
    P = set()
    _ = [[P.update({vertex}) for vertex in edge] for edge in edges]
    neighbors = {vertex: set() for vertex in P}
    _ = [expand_neighbors(edge, neighbors) for edge in edges]
    return P, neighbors

def maximal_clique():
    """Query the graph of person-person relationships and find 
    maximal cliques using the Bron-Kerbosch algorithm."""
    # IDEA: Parameterize the graph building, e.g. , allow graph building from org-org, person-person, etc. 
    edges = [(edge.person_1_id, edge.person_2_id) for edge in Person_Person.query.all()]
    P = set()
    _ = [[P.update({vertex}) for vertex in edge] for edge in edges]
    neighbors = {vertex: set() for vertex in P}
 
    _ = [expand_neighbors(edge, neighbors) for edge in edges]

    logging.debug(f"Size of P: {len(P)}")
    logging.debug(f"Average number of neighbors: {np.mean([len(v) for k, v in neighbors.items()])}")
    return list(bron_kerbosch(set(), P, set(), neighbors))

def person_cliques():
    """Build a graph of person-person relationships, find all cliques
    in the graph using the Bron-Kerbosch algorithm."""
    edges = [(edge.person_1_id, edge.person_2_id) for edge in Person_Person.query.all()]
    P, neighbors = build_graph(edges)
    cliques = bron_kerbosch_cliques(set(), P, set(), neighbors)
    return cliques

# IDEA: Refactor to a single Bron-Kerbosch algo, then return 
# all found cliques or filter to the single maximal clique, as needed.