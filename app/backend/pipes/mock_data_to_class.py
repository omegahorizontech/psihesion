import os

from helpers import readers
# from classes.Person import Person

dirname = os.path.dirname(__file__)
filename = os.path.join(dirname, '../../../Data/person.csv')

def load():
    return "Profiles go"
    # data = readers.read_csv(filename)
    # rows = data[1:]

    # person_data = []    
    # for row in rows:
    #     p = Person(*row)
    #     person_data.append(p)

    # return person_data