import csv
import random
from classes.Person import Person
from classes.Location import Location
from classes.Junctions import Person_Location
from api.config.databases import sql_db

# IDEA: Load data into database or generate data as needed.
def load():
    """Load person data from a csv file into the PERSON table."""
    with open("../../Data/person.csv") as csv_file:
        csv_reader = csv.reader(csv_file)
        column_names = csv_reader.__next__()
        cols = dict(zip(column_names, range(len(column_names))))
        _ = [sql_db.session.add(Person(first_name=row[cols["first_name"]],
                    last_name=row[cols["last_name"]],
                    phone_num=row[cols["phone"]],
                    email=row[cols["email"]])) for row in csv_reader]
        
    sql_db.session.commit()
    return 

def load_locations():
    """Load locations from a csv file into the LOCATION table."""
    # Use of data in prod requires link back to https://simplemaps.com/data/us-cities.
    with open("../../Data/uscities.csv") as csv_file:
        csv_reader = csv.reader(csv_file)
        column_names = csv_reader.__next__()
        cols = dict(zip(column_names, range(len(column_names))))
        _ = [sql_db.session.add(Location(name=row[cols["city_ascii"]],
                    latitude=row[cols["lat"]],
                    longitude=row[cols["lng"]])) for row in csv_reader]

    sql_db.session.commit()
    return 

def intersect_person_location():
    """Create and load data for the intersection of PERSON and LOCATION data"""
    persons = Person.query.all()
    locations = Location.query.all()
    [sql_db.session.add(Person_Location(person_id=person.id,
                                        location_id=random.choice(locations).id)) for person in persons]
    sql_db.session.commit()
    return

def load_organizations():
    """Load organizations from a csv file into the ORGANIZATION table"""
    with open("../../Data/organization.csv") as csv_file:
        csv_reader = csv.reader(csv_file)
        column_names = csv_reader.__next__()
        cols = dict(zip(column_names, range(len(column_names))))
        _ = [sql_db.session.add(Location(name=row[cols["name"]],
                    org_type=row[cols["org_type"]],
                    phone_num=row[cols["phone_num"]])) for row in csv_reader]
    sql_db.session.commit()
    return 

def associate_person_organization():
    """Create and load data for the association of PERSON and ORGANIZATION data"""
    pass 

def associate_organization_location():
    """Create and load data for the association of ORGANIZATION and LOCATION data"""
    pass 