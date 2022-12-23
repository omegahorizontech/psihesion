# API for `/psi_objects` endpoint

**GET /psi_objects**
```
{
  “_id”: <hash>,
  “name”: <string>, # Optional field, for human readable purposes
  “edges”: [<edge>]. # List of edges (in a graph sense), which can be objects relating two psi objects
}
```
