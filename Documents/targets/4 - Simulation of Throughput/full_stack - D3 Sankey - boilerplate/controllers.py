# Flask Controller
# sankeys/controllers.py

import os, json

def get_sankey(filename):
    json_file_name = filename
    lookup_file_name = 'lookup'

    in_file_path = os.path.join(os.getcwd(), 'adj_lists', f'{json_file_name}.json')
    lookup_file_path = os.path.join(os.getcwd(), 'lookups', f'{lookup_file_name}.json')

    adj_list = {}
    with open(in_file_path, "r") as f:
        # Reading from file
        adj_list = json.loads(f.read())

    lookup = {}
    with open(lookup_file_path, "r") as f:
        # Reading from file
        lookup = json.loads(f.read())


    labeled_adj_list = {}
    for i in adj_list:
        labeled_adj_list[lookup[i]] = []
        for j in adj_list[i]:
            a = [lookup[str(j[0])], j[1]]
            labeled_adj_list[lookup[i]].append(a)

    source = []
    target = []
    weight = []

    for s in labeled_adj_list:
        for t in labeled_adj_list[s]: 
            source.append(s)
            target.append(t[0])
            weight.append(t[1])

    data = list(zip(source, target, weight))
    
    reverseLookupCount = 0
    reverseLookup = {}

    links = []
    nodes = []
    for i in data:
        if i[0] not in reverseLookup:
            reverseLookup[i[0]] = reverseLookupCount
            nodes.append({"name": i[0]})
            reverseLookupCount += 1
        if i[1] not in reverseLookup:
            reverseLookup[i[1]] = reverseLookupCount
            nodes.append({"name": i[1]})
            reverseLookupCount += 1

        links.append({
            "source": reverseLookup[i[0]],
            "target": reverseLookup[i[1]],
            "value": i[2]
        })

    return {
        "links": links,
        "nodes": nodes
    }