import csv
import random
from classes.Person import Person
from classes.Location import Location
from classes.Organization import Organization
from classes.Junctions import Person_Location
from classes.Junctions import Person_Organization
from classes.Junctions import Organization_Location
from classes.Junctions import Person_Person
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
        _ = [sql_db.session.add(Organization(name=row[cols["name"]],
                    org_type=row[cols["org_type"]],
                    phone_num=row[cols["phone_num"]])) for row in csv_reader]
    sql_db.session.commit()
    return 

def associate_person_organization():
    """Create and load data for the association of PERSON and ORGANIZATION data"""
    persons = Person.query.all()
    organizations = Organization.query.all()
    _ = [sql_db.session.add(Person_Organization(person_id=person.id,
                                                organization_id=random.choice(organizations).id)) for person in persons]
    sql_db.session.commit()
    return 

def associate_organization_location():
    """Create and load data for the association of ORGANIZATION and LOCATION data"""
    organizations = Organization.query.all()
    locations = Location.query.all()
    _ = [sql_db.session.add(Organization_Location(organization_id=org.id,
                               location_id=random.choice(locations).id)) for org in organizations]
    sql_db.session.commit()
    return 

def associate_person_person():
    """Create and load association table relating PERSON rows to PERSON rows with a relation type"""

    persons = Person.query.all()
    association_types = list(range(3)) # 0: share location; 1: share org; 2: other
    num_of_associations = 10000 # Indep variable for number of associations to create between people.
    pairs = [(random.sample(persons, 2)) for _ in range(num_of_associations)]
    # print("Number of pairs:", len(pairs))
    _ = [sql_db.session.add(Person_Person(person_1_id=pair[0].id, 
                       person_2_id=pair[1].id,
                       type_id=random.choice(association_types))) for pair in pairs]
    sql_db.session.commit()
    # print("Number of Person-Persons:", len(Person_Person.query.all()))
    return 