import os
from helpers import readers

dirname = os.path.dirname(__file__)
filename = os.path.join(dirname, '../../../Data/person.csv')

def load_data():

    a = readers.read_csv(filename)
    print(a)
    return filename