import csv

def write_csv(file_path, data):
    if data:
        with open(file_path, 'w', newline='') as out_file:
            writer = csv.writer(out_file)

            writer.writerows(data)
