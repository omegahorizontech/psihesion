# API for `/psi_edges` endpoint

**GET /psi_edges**
```
{
  “_id”: <hash>,
  “name”: <string>, # Optional field, for human readable purposes
  “nodes”: [<nodes>]. # List of two nodes connected by this edge (in a graph sense), which are two psi_objects
}
```
