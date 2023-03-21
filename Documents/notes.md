
### 02/27/2023

Walkthrough on using Flask-SQLAlchemy to create, interact with DB's:
https://www.digitalocean.com/community/tutorials/how-to-use-flask-sqlalchemy-to-interact-with-databases-in-a-flask-application

Tasks in progress: 
- Create schemas for PERSON, LOCATION, PRODUCT, VENDOR (or something close to this).
- Create collision tables for LOC (X) PERSON; LOC (X) ENTITY; PRODUCT (X) VENDOR; CLIQUES (X) NODES
- Design algorithms for finding cliques (see: Clique Problem; Bron-Kerbosch algorithm).
- Design endpoints for getting Euclidean distance between two locations; finding cliques for a node.

I'm not satisfied with the above schema, I need something more normalized and comprehensive. I want something like PERSON, LOCATION, PRODUCT, ORGANIZATION and then collision tables as necessary. 


### 02/28/2023 

After including this little line in the config/databases.py file:

```
app.app_context().push()
```

The database successfully gets created. I still need to execute the code that loads csv data into the DB. 

Gentle remind, to run the app, use this:
```
python .\runserver.py 5000
```

### 03/10/2023 

I have: 
[x] Basic ORMs for Location, Person, Organization, and Products. 
[x] Endpoints for viewing orgs, products, persons. 
[x] Some logic for the endpoint for L2 distance between persons. I need a complete ORM for a cross product between PERSON and LOCATION. 

I need to:
[ ] Complete the logic for the L2 distance endpoint. 
[ ] Create/load data for orgs, products, and locations. 
[ ] Create the logic to find cliques.
[ ] Create the logic to retrieve cliques for a node. 
[ ] Create the endpoint for retrieving a node's cliques. 

### 03/13/2023

Use of data in prod requires link back to https://simplemaps.com/data/us-cities.

I loaded location data, associated each person with a location, then completed the distance endpoint functionality for person-to-person distance. 

Tomorrow, I'd like to load in organization data, associate each person with some number of orgs, associate each org with a location, then find cliques. 

I have: 
[x] Completed the logic for the L2 distance endpoint. 
[x] Created/loaded data for locations. 
[x] Associated each person with a location.

Later:
[ ] Create/load data for orgs. 
[ ] Associate each org with a location.
[ ] Create the logic to find cliques.
[ ] Create the logic to retrieve cliques for a node. 
[ ] Create the endpoint for retrieving a node's cliques. 

### 03/20/2023

I've realized that using e.g., person-orgs, person-locs, and org-locs isn't that great for finding cliques. Building graphs from 
these assocations crosses categories, creating odd situations when it's time to find cliques. In the case of attempting to find cliques from person-orgs, person-locs, and org-locs, I would need to explicitly associate locations with locations, persons with persons, and orgs with orgs, adding greatly to the number of associations to be parsed in order to build the graph. Then, there's the additional computation needed to do clique finding once all of these edges are added to the graph. I hold the view that these additional edges are redundant, superfluous, as they don't include information that could not be more easily included in other ways. 

For example (one of many, many possible), if we use person-orgs, org-org, and person-person, the only way for the orgs to be included in the clique is if all persons are in all orgs that are candidate members of the clique. In the unlikely event that all persons are in all orgs that would be part of the clique, including the orgs themselves in the graph would be redundant, as the persons in the clique are already correctly associated with each other and their org affiliations are already known. 

I'm of the view that it's simpler to stick to graphs with a single type of entity, such as person-person OR org-org. Doing so reduces the number of edges that need to be searched in the graph in order to find cliques. By not including org nodes in a person-person graphs, we have eliminated redundant info that is already captured in the person-person edges. We can always do a separate query for an org-org graph and overlay that information on a person-person graph, highlighting cliques in each layer.  