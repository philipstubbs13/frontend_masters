import os

my_folder = os.getcwd()
print(f"Here are the files in: {my_folder}:")

with os.scandir(my_folder) as folder:
  for entry in folder:
    print(f" - {entry.name}")