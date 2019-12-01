# import importlib
# importlib.reload(cars)
# my_subaru = cars.Car("Subaru")
# cars.Car.get_number_of_wheels()
# my_subaru.get_number_of_wheels()
# cars.Car.start()
# type(cars.Car)
# type(my_subaru)
# isinstance(42, int)
# isinstance("hello world", str)
# isinstance(42, str)
# isinstance(my_subaru, int)
# isinstance(my_subaru, cars.Car)
# don't use this in production code
# isinstance(True, int)
# True + True # dont do this!
# any([1, 0, 1, 3])
# any([True, False, True, True])
# all([True, False, True, True])
# issubclass(int, object)
# my_new_car = cars.Car("mustang")
# str(my_new_car)
# new_subaru = cars.Car("subaru")
# str(new_subaru)
# repr(new_subaru)
# nums = ["1", "5.0", "-1"]
# [float(num) for num in nums]

class Car:
  runs = True
  number_of_wheels = 4

  def __init__(self, name):
    print("new car!")
    self.name = name

  def __str__(self):
    return f"My car the {self.name} currently {self.runs}"

  def __repr__(self):
    return f"Car({self.name})"

  def start(self):
    if self.runs:
      print(f"{self.name} car is started")
    else:
      print(f"{self.name} car is broken.")

  @classmethod
  def get_number_of_wheels(cls);
    return cls.number_of_wheels