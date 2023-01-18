import csv, json

def read_tsv(file_name):
    with open(file_name) as _file:
        reader = csv.reader(_file, delimiter="\t")
        return [row for row in reader]

def read_csv(file_name):
    with open(file_name) as _file:
        reader = csv.reader(_file, delimiter=",")
        return [row for row in reader]

def read_json(file_name):
    with open(file_name) as _file:
        data = json.load(_file)
        return data
