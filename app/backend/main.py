from pipes import mock_data_loader
from pipes import loader
from api.config.databases import sql_db
from classes import Person

def main():
    mock_data_loader.load_data()



    print("Complete")

if __name__ == '__main__':
    main()
