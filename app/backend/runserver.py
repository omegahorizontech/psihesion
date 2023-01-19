from app import app
import sys

from api.auth.views import auth
from api.persons.views import persons
from api.users.views import users

app.register_blueprint(auth, url_prefix='/auth')
app.register_blueprint(persons, url_prefix='/persons')
app.register_blueprint(users, url_prefix='/users')

# Sets the port, or defaults to 80
if (len(sys.argv) > 1):
    port = int(sys.argv[1])
else:
    port=80

app.run(debug=True, host='127.0.0.1', port=port)
