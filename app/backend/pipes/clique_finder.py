from classes.Junctions import Person_Location
from classes.Junctions import Person_Organization
from classes.Junctions import Organization_Location

import random

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
    u = random.choice(tuple(P.union(X)))
    results = []
    for i, v in enumerate(P.difference(neighbors[u])):
        print(f"We runnin' wit {len(R)}")
        if i > 0:
            P = P.difference({v})
            X = X.union({v})
        results += bron_kerbosch(R.union({v}), P.intersection(neighbors[v]), X.intersection(neighbors[v]), neighbors)
    # IDEA: return the largest R
    result_sizes = [len(r) for r in results]
    # return biggest result

def find_cliques(id):

    pass 

def maximal_clique():
    # Get Org-Locs, Person-Locs, Person-Orgs
    neighbors = {}
    person_locations = Person_Location.query.all()
    person_orgs = Person_Organization.query.all()
    org_locations = Organization_Location.query.all()

    person_locations = [(str(pl.person_id) + "p", str(pl.location_id) + "l") for pl in person_locations]
    person_orgs = [(str(po.person_id) + "p", str(po.organization_id) + "o") for po in person_orgs]
    org_locations = [(str(ol.organization_id) + "o", str(ol.location_id) + "l") for ol in org_locations]

    neighbors = {pl[0]: {pl[1]} for pl in person_locations}
    neighbors.update({pl[1]: {pl[0]} for pl in person_locations})
    neighbors.update({ol[0]: {ol[1]} for ol in org_locations})

    neighbors.update({ol[1]: neighbors[ol[1]].union({ol[0]}) if ol[1] in neighbors else {ol[0]} for ol in org_locations})
    neighbors.update({po[0]: neighbors[po[0]].union({po[1]}) if po[0] in neighbors else {po[1]} for po in person_orgs})
    neighbors.update({po[1]: neighbors[po[1]].union({po[0]}) if po[1] in neighbors else {po[0]} for po in person_orgs})

    edges = person_locations + person_orgs + org_locations 
    # print(edges)
    # print(type(list(neighbors.keys())[0]))
    P = set()
    _ = [[P.update({v}) for v in tup] for tup in edges]
    print(f"Size of P: {len(P)}")
    return bron_kerbosch(set(), P, set(), neighbors)
    