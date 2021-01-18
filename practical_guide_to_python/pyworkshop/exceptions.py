# this will throw an exception!
try:
  int("a")
  d = {}
  d["a"]
except ValueError:
  print("A value exception happended.")
except KeyError:
  print("A key was not found.")

print("End of the program")