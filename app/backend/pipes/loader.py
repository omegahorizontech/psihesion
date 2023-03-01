import csv
from classes.Person import Person
from api.config.databases import sql_db

# IDEA: Load data into database or generate data as needed.
def load():
    # Load person data into the PERSON table. 
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
# print(Person.query.all())