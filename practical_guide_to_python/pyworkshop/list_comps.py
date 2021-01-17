names = ["Nina", "Max", "Rose", "Jimmy"]
my_list = [] # empty list
for name in names:
    my_list.append(len(name))
print("Before:", my_list)

my_list = [name for name in names if len(name) % 2 != 0]
print("After", my_list)
