from app import app
import sys

from api.auth.views import auth
from api.profiles.views import profiles
from api.users.views import users
from api.orgs.views import orgs

from api.config.databases import sql_db
from classes.Person import Person
from classes.Location import Location

from pipes import loader
from pipes.l2_distance import distance

app.register_blueprint(auth, url_prefix='/auth')
app.register_blueprint(profiles, url_prefix='/profiles')
app.register_blueprint(orgs, url_prefix='/orgs')
app.register_blueprint(users, url_prefix='/users')
app.register_blueprint(distance, url_prefix="/distance")

sql_db.drop_all()
sql_db.create_all()

# Sets the port, or defaults to 80
if (len(sys.argv) > 1):
    port = int(sys.argv[1])
else:
    port=80

loader.load()
loader.load_locations()
loader.intersect_person_location()

# print("Hello World!!!")
# loader.load()
# persons = Person.query.all()
# print(persons)

app.run(debug=True, host='0.0.0.0', port=port)

