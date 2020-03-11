# import importlib
# importlib.reload(cars)
class Vehicle:

  def __init__(self, make, model, fuel="gas"):
    self.make = make
    self.model = model
    self.fuel = fuel

  def is_eco_friendly(self):
    if self.fuel == "gas":
      return False
    else:
      return True

class Car(Vehicle):

  def __init__(self, make, model, fuel="gas", num_wheels=4):
    super().__init__(make, model, fuel)
    self.num_wheels = num_wheels

# >>> import vehicle
# >>> four_by_four = vehicle.Vehicle("zoom", "goes fast", fuel="cooking oil")
# >>> four_by_four.make
# 'zoom'
# >>> four_by_four.model
# 'goes fast'
# >>> four_by_four.fuel
# 'cooking oil'
# >>> my_subaru = vehicle.Car("subaru", "cross trek", fuel="diesel")
# >>> my_subaru.make
# 'subaru'
# >>> my_subaru.model
# 'cross trek'
# >>> my_subaru.fuel
# 'diesel'
# >>> my_subaru.num_wheeels
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# AttributeError: 'Car' object has no attribute 'num_wheeels'
# >>> my_subaru.num_wheels
# 4
# >>> four_by_four.num_wheels
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# AttributeError: 'Vehicle' object has no attribute 'num_wheels'
# >>> import importlib
# >>> importlib.reload(vehicle)
# <module 'vehicle' from 'C:\\Users\\phili\\Desktop\\coding_projects\\frontend_masters\\intermediate_python\\vehicle.py'>
# >>> four_by_four = vehicle.Vehicle("zoom", "goes fast", fuel="cooking oil")
# >>> my_subaru = vehicle.Car("subaru", "cross trek")
# >>> four_by_four.is_eco_friendly()
# True
# >>> my_subaru.is_eco_friendly()
# False
# >>>            