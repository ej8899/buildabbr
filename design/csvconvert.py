import csv
import json

def read_data_from_csv(file_path):
    objects = []
    with open(file_path, 'r', newline='') as csvfile:
        csvreader = csv.reader(csvfile)
        for row in csvreader:
            if len(row) >= 2:  # Ensuring at least two columns are present
                abbr = row[0]
                title = row[1]
                obj = {
                    "abbr": abbr,
                    "title": title,
                    "description": "",
                    "image": "",
                    "area": "",
                    "seeAlso": []
                }
                objects.append(obj)
    return objects

file_path = "import.csv" 
data_objects = read_data_from_csv(file_path)
print(json.dumps(data_objects, indent=4))
