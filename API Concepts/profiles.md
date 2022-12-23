# API for `/profiles` endpoint
Identity of a `psi_object` represented as a profiles includes types:
- Person (0)
- Place (1)
- Faction (2) - i.e. Organizations, governments, other groups, etc.


**GET /profiles**
<br>
Get list of profiles <br>
Implements `psi_objects`

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
    "sources": [<id>], # List of pointers (to an ID in the document store, mongodb)
  }
}
```
---
**GET /profiles/(id)/data**
<br>
Get list of profiles with full data pointers <br>
Implements `psi_objects` <br>
Key/value pairs in `data` not included if value is null <br>
Additional names included in `names` follow the key/value pair format <br>

```
{
  "type": <integer>, # See top
  "names": {
    “first_name”: <string>,
    “last_name”: <string>,
    "display_name": <string>,
  },
  “coordinates: <string>, # Stringed list of tuple(s) (mainly for places)
  "data": {
    "profiles": [<id>], # List of pointers (Other profiles includes places, factions, etc.)
    “roles”: [<id>], # List of pointers
    "projects”: [<id>], # List of pointers
    "sources": [<id>], # List of pointers (to an ID in the document store, mongodb)
    "core_proficiences": [<id>],
    "psihesion_qualities": [<id>],
    "affects": [<id>],
    "beliefs": [<id>],
    "skills": [<id>],
    "biography": [<id>],
    "demography": [<id>],
    "positions": [<id>],
    "interests": [<id>],
    "certificates": [<id>],
    "teammates": [<id>],
  },
}
```
---
**GET /profiles/(id)/profiles**
<br>
Get associated profiles with start and end dates for a profile<br>
Implements `psi_objects`
```
Place specific information:
{
  "type": <integer>, # See top
  "names": {
    “first_name”: <string>,
    “last_name”: <string>,
    "display_name": <string>,
  },
  “coordinates: <string>, # Stringed list of tuple(s) (mainly for places)
  "ranges": [ # List of start/end date ranges
    "start": <date>,
    "end": <date>,
    "psi_object_id": <id>, # Related `psi_object` of participating person, place, or thing
  ],
}
```
---
**GET /profiles/(id)/roles**
<br>
Get projects with start and end dates for a profile<br>
Implements `psi_objects`
```
Place specific information:
{
  "id": <id>,
  "name": <string>,
  “projects”: [<id>], # Domain specific projects
  "ranges": [ # List of start/end date ranges
    "start": <date>,
    "end": <date>,
    "psi_object_id": <id>, # Related `psi_object` of participating person, place, or thing
  ],
}
```
---
**GET /profiles/(id)/projects**
<br>
Get projects with start and end dates for a profile<br>
Implements `psi_objects`
```
Place specific information:
{
  "id": <id>,
  "name": <string>,
  “allowed_roles”: [<id>], # Pointer to the role
  “sub_projects”: [<id>], # Domain specific projects
  "ranges": [ # List of start/end date ranges
    "start": <date>,
    "end": <date>,
    "psi_object_id": <id>, # Related `psi_object` of participating person, place, or thing
  ],
}
```
