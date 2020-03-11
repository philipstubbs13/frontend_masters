class Vehicle:
  
  def __init__(self, make, model, fuel="gas"):
    self.make = make
    self.model = model
    self.fuel = fuel

  def __str__(self):
    return f"I drive {self.make} {self.model}. It runs on {self.fuel}."

class Car(Vehicle):

  number_of_wheels = 4


class Truck(Vehicle):

  number_of_wheels = 6

  def __init__(self, make, model, fuel="diesel"):
    super().__init__(make, model, fuel)


daily = Vehicle("Subaru", "Crosstrek")
print(daily)

# print("for Class", Vehicle.number_of_wheels)
# print("for Instance", daily.number_of_wheels)

# daily.number_of_wheels = 3

# print("for Class", Vehicle.number_of_wheels)
# print("for this instance (daily)", daily.number_of_wheels)


# Run python in interactive mode (nice for debugging)
# python -i class_example.py


# $ python -i class_example.py
# I drive Subaru Crosstrek. It runs on gas.
# >>> daily = Car("Subaru", "Crosstrek")
# >>> print(f"I drive {daily.make} {daily.model}. It uses {daily.fuel} and drives on {daily.number_of_wheels} wheels.")
# I drive Subaru Crosstrek. It uses gas and drives on 4 wheels.
# >>> truck = Truck("Ford", "F350")
# >>> truck.make
# 'Ford'
# >>> truck.model
# 'F350'
# >>> truck.fuel
# 'diesel'
# >>> type(truck)
# <class '__main__.Truck'>
# >>> type(daily)
# <class '__main__.Car'>
# >>> isinstance(daily, Car)
# True
# >>> isinstance(truck, Truck)
# True
# >>> issubclass(Truck, Vehicle)
# True
# >>> issubclass(Car, Vehicle)
# True
# >>> issubclass(Vehicle, Car)
# False


class GitHubRepo:

  def __init__(self, name, language, num_stars):
    self.name = name
    self.language = language
    self.num_stars = num_stars

  def __str__(self):
    return f"{self.name} is a {self.language} repo with {self.num_stars}."

vue = GitHubRepo(name="Vue", language="JavaScript", num_stars=50000)
print(vue)