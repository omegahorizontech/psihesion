# Psi Object Overview:
##### Psi Objects are people, places, and things.
- People: A profile (since we don't actually store a person, but a representation)
- Places: A polygon of lat/long coordinates or a single coordinate (useful for geo data)
- Things: Varies drastically, represented as a symbol, these are a few different types/kinds:
  - Factions, organizations, and other groups, etc.
  - Technologies, methods, processes, etc.
  - Products, items, equipment, facilities, etc.
  - Abstract concepts (mappings between ideas), funding sources or amounts, percepts (ideologies, beliefs), etc.
  - Fields, such as graphs and tensors, describing networks of psi_objects (allowing for nested `psi_objects`)


**GET /psi_objects**
<br>
```
{
  “_id”: <hash>,
  “name”: <string>, # Optional field, for human readable purposes
  “edges”: [<edge>]. # List of edges (in a graph sense), which can be objects relating two psi objects
}
```

**GET /psi_objects/(id)/related**
<br>
Key/value pairs in `related` not included if value is null <br>
```
{
  “_id”: <hash>,
  “name”: <string>, # Optional field, for human readable purposes
  “edges”: [<edge>]. # List of edges (in a graph sense), which can be objects relating two psi objects,
  "related": {
    "profiles": [<id>], # List of pointers
    "projects": [<id>], # List of pointers
    "roles": [<id>], # List of pointers
  }
}
```

**GET /psi_edges**
<br>
```
{
  “_id”: <hash>,
  “name”: <string>, # Optional field, for human readable purposes
  “nodes”: [<nodes>]. # List of two nodes connected by this edge (in a graph sense), which are two psi_objects
}
```

**GET /profiles**
<br>
Get list of profiles<br>
Implements `psi_objects`<br>
Identity of a `psi_object` represented as a profiles includes (at least, these) types:
- Person (0)
- Place (1)
- Faction (2) - i.e. Organizations, governments, other groups, etc.

Other psi objects inherit from the above base `psi_object`
```
{
  "type": <integer>, # See top
  "names": {
    “first_name”: <string>,
    “last_name”: <string>,
    "display_name": <string>,
  },
  “coordinates: <string>, # Stringed list of tuple(s) (mainly for places),
  "data" {
    "profiles": [<id>], # List of pointers (Other profiles includes places, factions, etc.)
    “roles”: [<id>], # List of pointers
    "projects”: [<id>], # List of pointers
  }
}
```

**GET /roles**
<br>
Get list of roles<br>
Implements `psi_objects`
```
Role specific information with details about the possible role for a profile:
{
  “id": <id>,
  “name": <string>,
  “projects”: [<id>], # Domain specific projects
  ...
}
```

**GET /roles/(id)**
<br>
Get list of roles<br>
Implements `psi_objects`
```
Get a single role for a `psi_object`:
{
  “id": <id>,
  “name": <string>,
  “projects”: [<id>], # Domain specific projects
  "ranges": [ # List of start/end date ranges
    "start": <date>,
    "end": <date>,
    "psi_object_id": <id>, # Related `psi_object` of participating person, place, or thing
  ],
  ...
}
```

**GET /projects**
<br>
Get list of projects<br>
Implements `psi_objects`
```
Project specific information:
{
  “id": <id>,
  “name": <string>,
  “allowed_roles”: [<id>], # Pointer to the role
  “sub_projects”: [<id>], # Domain specific projects
  ...
}
```

**GET /projects/(id)**
<br>
Get a single project with a start and end date for a `psi_object`<br>
Implements `psi_objects`
```
Project specific information:
{
  “id": <id>,
  “name": <string>,
  “allowed_roles”: [<id>], # Pointer to the role
  “sub_projects”: [<id>], # Domain specific projects
  "ranges": [ # List of start/end date ranges
    "start": <date>,
    "end": <date>,
    "psi_object_id": <id>, # Related `psi_object` of participating person, place, or thing
  ],
  ...
}
```
