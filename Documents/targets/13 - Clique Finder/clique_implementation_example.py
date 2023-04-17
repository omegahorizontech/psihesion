from classes.Junctions import Person_Location
from classes.Junctions import Person_Organization
from classes.Junctions import Organization_Location
from classes.Junctions import Person_Person

import random
import numpy as np
import logging

# Find the cliques which a given node is part of. 
# neighbors = {}

def bron_kerbosch(R, P, X, neighbors):
    """Bron-Kerbosch algorithm using a pivot to find a maximal subgraph
    or clique within a set of vertices
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
        print(f"We runnin' wit {len(R)}")
        # if i > 0:
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

def maximal_clique():
    """Query the graph of person-person relationships and find 
    maximal cliques using the Bron-Kerbosch algorithm."""
    # IDEA: Parameterize the graph building, e.g., allow graph building from org-org, person-person, etc. 
    edges = [(edge.person_1_id, edge.person_2_id) for edge in Person_Person.query.all()]
    P = set()
    _ = [[P.update({vertex}) for vertex in edge] for edge in edges]
    neighbors = {vertex: set() for vertex in P}
 
    _ = [expand_neighbors(edge, neighbors) for edge in edges]

    logging.debug(f"Size of P: {len(P)}")
    logging.debug(f"Average number of neighbors: {np.mean([len(v) for k, v in neighbors.items()])}")
    return bron_kerbosch(set(), P, set(), neighbors)