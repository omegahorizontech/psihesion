
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