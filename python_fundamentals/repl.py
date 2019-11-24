Python 3.7.4 (default, Aug  9 2019, 18:34:13) [MSC v.1915 64 bit (AMD64)] :: Anaconda, Inc. on win32

Warning:
This Python interpreter is in a conda environment, but the environment has
not been activated.  Libraries may fail to load.  To activate this environment
please see https://conda.io/activation
Type "help", "copyright", "credits" or "license" for more information.
>>> 3 / 4
0.75
>>> 1 + 5
6   
>>> name = "Phil"
>>> name
'Phil'
>>> type(name)
<class 'str'>
>>> dir(name)
['__add__', '__class__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'capitalize', 'casefold', 'center', 'count', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'format_map', 'index', 'isalnum', 'isalpha', 'isascii', 'isdecimal', 'isdigit', 'isidentifier', 'islower', 'isnumeric', 'isprintable', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'maketrans', 'partition', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill']        
>>> name.upper(_
... 
KeyboardInterrupt
>>> name.upper()
'PHIL'
>>> help()

Welcome to Python 3.7's help utility!

If this is your first time using Python, you should definitely check out
the tutorial on the Internet at https://docs.python.org/3.7/tutorial/.

Enter the name of any module, keyword, or topic to get help on writing
Python programs and using Python modules.  To quit this help utility and
return to the interpreter, just type "quit".

To get a list of available modules, keywords, symbols, or topics, type
"modules", "keywords", "symbols", or "topics".  Each module also comes
with a one-line summary of what it does; to list the modules whose name
or summary contain a given string such as "spam", type "modules spam".
 |  errors defaults to 'strict'.
 |
 |  Methods defined here:
 |

>>> help(str.upper)
Help on method_descriptor:

upper(self, /)
    Return a copy of the string converted to uppercase.

>>> 3x = 4
  File "<stdin>", line 1
    3x = 4
     ^
SyntaxError: invalid syntax
>>> x = 42
>>> x = "Hello"
>>> my_list = 
  File "<stdin>", line 1
    my_list =
             ^
SyntaxError: invalid syntax
>>> my_list = []
>>> type(x)
<class 'str'>
>>> x = None
>>> x
>>> type(x)
<class 'NoneType'>
>>> x = "Hello"
>>> x
'Hello'
>>> x = 4
>>> y = -3938
>>> z = 0
>>> # Float
... 
>>> x = 5.0
>>> y = -3484.5
>>> z = 0.0
>>> 
>>> z
0.0
>>> x = 42j
>>> x
42j
>>> type(x)
<class 'complex'>
>>> type(y)
<class 'float'>
>>> a = 1
>>> type(1)
<class 'int'>
>>> int(5)
5
>>> float(3.0)
3.0
>>> x = 5
>>> y = 3.0
>>> x + y
8.0
>>> 6 / 2
3.0
>>> 3 * 3
9
>>> 'Hello'
'Hello'
>>> "Hello"
'Hello'
>>> 'Hello N's'
  File "<stdin>", line 1
    'Hello N's'
             ^
SyntaxError: invalid syntax
>>> "Hello N\'s"
"Hello N's"
>>> "Nina" + " Z"
'Nina Z'
>>> long_string = """
... 12345
... abc
... """
>>> long_string
'\n12345\nabc\n'
>>> name = "Nina"
>>> f"Hello, {name}"
'Hello, Nina'
>>> name = 'Nina"
  File "<stdin>", line 1
    name = 'Nina"
                ^
SyntaxError: EOL while scanning string literal
>>> "Hello, " + "Nina"
'Hello, Nina'
>>> "Hello, " + 3
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: can only concatenate str (not "int") to str
>>> 3 + " Hello"
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unsupported operand type(s) for +: 'int' and 'str'
>>> a = 5
>>> name = "Nina"
>>> name + a
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: can only concatenate str (not "int") to str
>>> x = 42
>>> type(x)
<class 'int'>
>>> y = 3 / 4
>>> type(y)
<class 'float'>
>>> z = int('7')
>>> type(z)
<class 'int'>
>>> a = float(5)
>>> type(a)
<class 'float'>
>>> name="Nina"
>>> type(name)
<class 'str'>
>>> rent = 480
>>> per_day = rent / 30
>>> print(per_day)
16.0
>>> print("Hello world")
Hello world
>>> name = "Nina'
  File "<stdin>", line 1
    name = "Nina'
                ^
SyntaxError: EOL while scanning string literal
>>> name = "Nina"
>>> print("My name is", name)
My name is Nina
>>> name = "Nina"
>>> print("Hello, my name is %s" % name)
Hello, my name is Nina
>>> name = "Nina"
>>> print(f"Hello, my name is {name}} and I pay ${rent / 30} in rent per day")
  File "<stdin>", line 1
SyntaxError: f-string: single '}' is not allowed
>>> print(f"Hello, my name is {name} and I pay ${rent / 30} in rent per day")  
Hello, my name is Nina and I pay $16.0 in rent per day
>>> x = 42
>>> y = 3 / 4
>>> name = "Nina"
>>> type(x)
<class 'int'>
>>> type(y)
<class 'float'>
>>> type(name)
<class 'str'>
>>> # Functions
... 
>>> def foo():
...     print("hello!")
... 
>>> foo()
hello!
>>> def meaning_of_life(): 
...     return 42
... 
>>> meaning_of_life()
42
>>> called_foo = foo()
hello!
>>> called_foo
>>> x = meaning_of_life()
>>> x
42
>>> def add_numbers(x, y):
...     return x + y
... add_numbers(3, 5)
  File "<stdin>", line 3
    add_numbers(3, 5)
              ^
SyntaxError: invalid syntax
>>> add_numbers(3, 5)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'add_numbers' is not defined
>>> def add_numbers(x, y):
...     return x + y
... 
>>> add_numbers(3, 5)      
8
>>> a = 1
>>> b = 5
>>> add_numbers(a, b)
6
>>> def oops()
  File "<stdin>", line 1
    def oops()
             ^
SyntaxError: invalid syntax
>>> def oops: 
  File "<stdin>", line 1
    def oops:
            ^
SyntaxError: invalid syntax
>>> def greeting(name):
... greeting = "Hello "
  File "<stdin>", line 2
    greeting = "Hello "
           ^
IndentationError: expected an indented block
>>> def greeting(name):
...     greeting = "Hello"
...     return greeting + name
... 
>>> greeting("Nina")
'HelloNina'
>>> def foo():
...     x = 5
...     return
... 
>>>  x = foo()
  File "<stdin>", line 1
    x = foo()
    ^
IndentationError: unexpected indent
>>> x = foo()
>>> type(x)
<class 'NoneType'>
>>> # Function Arguments
... 
>>> def add_numbers(x, y):
...     return x + y
... add_numbers(3, 5)
  File "<stdin>", line 3
    add_numbers(3, 5)
              ^
SyntaxError: invalid syntax
>>> def add_numbers(x, y):
...     return x + y
... 
>>> add_numbers(3, 5)      
8
>>> add_numbers(3)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: add_numbers() missing 1 required positional argument: 'y'
>>> def say_greeting(greeting, name):
...     print(f"{greeting}, {name}")
... 
>>> say_greeting("Hello", "Nina")
Hello, Nina
>>> def say_greeting(name, greeting="Hello"):
...     print(f"{greeting}, {name}")
... 
>>> say_greeting("Nina")
Hello, Nina
>>> say_greeting("Nina", "Bonjour") 
Bonjour, Nina
>>> def say_greeting_bad(greeting="hello", name):
...     print(name)
... 
  File "<stdin>", line 1
SyntaxError: non-default argument follows default argument
>>> say_greeting()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: say_greeting() missing 1 required positional argument: 'name'
>>> def create_query(language="Javascript", num_stars=50, sort="desc"):
...     return f"language: {language}, {num_starts} {sort}"
... 
>>> create_query()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "<stdin>", line 2, in create_query
NameError: name 'num_starts' is not defined
>>> def create_query(language="Javascript", num_stars=50, sort="desc"):
...     return f"language: {language}, {num_stars} {sort}""
... 
>>> create_query()
'language: Javascript, 50 desc'
>>> create_query(language="Python") 
'language: Python, 50 desc'
>>> create_query(language="Python", sort=100, num_stars=1)  
'language: Python, 1 100'
>>> def foo(a, b=5):
...     return a + b
... 
>>> foo(3)
8
>>> foo(3, b=6)
9
>>> foo(a=3, b=7)
10
>>> # Warning: Don't do this!
... 
>>> def foo(a, b=[]):
...     b.append(a)
... 
>>> foo(5)
>>> def foo(a, b=[]):
...     b.append(a)
...     print("B is ", b)
... 
>>> foo(5)
B is  [5]
>>> foo(6) 
B is  [5, 6]
>>> def twitter_info():
...     account="nnja"
...     print(f"Account inside the function is: {account}")
... 
>>> twitter_info()
Account inside the function is: nnja
>>> account
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'account' is not defined
>>> name = "Nina"
>>> 
>>> def try_change_name():
...     name = "Max"
...     print(f"Name inside function: {name}")
... 
>>> try_change_name()
Name inside function: Max
>>> f"Name outside of the function: {name}"
'Name outside of the function: Nina'
>>> # Don't do this!
... 
>>> # source of bugs.
... 
>>> def foo(a, b=[]):
...     b.append(a)
...     print(b)
... foo(1)
  File "<stdin>", line 4
    foo(1)
      ^
SyntaxError: invalid syntax
>>> def foo(a, b=[]):
...     b.append(a)
...     print(b)
... 
>>> foo(1)
[1]
>>> foo(5) 
[1, 5]
>>> # DO this instead.
... 
>>> def foo(a, b=None):
...     if b is None:
...             b = []
...     b.append(a)
...     print(b)
... 
>>> foo(1)
[1]
>>> foo(5)
[5]
>>> def add_numbers(x, y):
...     return x + y
...  
>>> add_numbers(1, 2)
3
>>> a = 1
>>> b = 1
>>> add_numbers(a, b)
2
>>> def foo():
... x = 5
  File "<stdin>", line 2
    x = 5
    ^
IndentationError: expected an indented block
>>> x = 1
>>> y = 2
>>> def add_numbers(x, y):
...     print(f"Inside the function, x: {x}, y: {y}")
...     return x + y
... 
>>> f"Outside of the function, x: {x}, y: {y}"
'Outside of the function, x: 1, y: 2'
>>> add_numbers(4, 5)
Inside the function, x: 4, y: 5
9
>>> x
1
>>> y
2
>>> def numbers():
...     x = 0
...     y = -1
...     print(f"Inside the function, x: {x}, y: {y}")
... 
>>> numbers()
Inside the function, x: 0, y: -1
>>> f"Outside out the function, x:{x}. y:{y}"
'Outside out the function, x:1. y:2'
>>> def calculate_numbers(x, y, operation="add"):
...     if operation == "add":
...             return x + y
...     if operation == "subtract":
...             return x - y
... 
>>> calculate_numbers(4, 5)
9
>>> calculate_numbers(4, 5, operation="subract")
>>> calculate_numbers(4, 5, operation="subtract") 
-1
5
>>> calculate_numbers()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: calculate_numbers() missing 2 required positional arguments: 'x' and 'y'>>>
>>> None
>>> True
True
>>> False
False
>>> # == equality
...
>>> # is, do they point to the same thing in memory?
...
>>>
>>> # lists
... 
>>> []
[]
>>> list()
[]
>>> type([])
<class 'list'>
>>> names = ["Nina", "Max", "Rose"]
>>> type(names)
<class 'list'>
>>> names
['Nina', 'Max', 'Rose']
>>> print(names)
['Nina', 'Max', 'Rose']
>>> "Nina".lower()
'nina'
>>> len(names)
3
>>> names[1]
'Max'
>>> my_list[0]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: list index out of range
>>> names[0]   
'Nina'
>>> names[2]
'Rose'
>>> names[3]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: list index out of range
>>> names[1] = "Jimmy"
>>> names
['Nina', 'Jimmy', 'Rose']
>>> names = [
... "Nina",
... "Jimmy",
... "Rose",  
... ]
>>> names
['Nina', 'Jimmy', 'Rose']
>>> [1, 2, 3 4]
  File "<stdin>", line 1
    [1, 2, 3 4]
             ^
SyntaxError: invalid syntax
>>>
>>> 
>>> lottery_numbers = [1, 4, 34242, 78, 11]                                             
>>> # Two ways of sorting lists in Python
... 
>>> sorted(lottery_numbers)
[1, 4, 11, 78, 34242]
>>> lottery_numbers
[1, 4, 34242, 78, 11]
>>> sorted(lottery_numbers, reverse=True) 
[34242, 78, 11, 4, 1]
>>> lottery_numbers
[1, 4, 34242, 78, 11]
>>> x = sorted(lottery_numbers)
>>> x
[1, 4, 11, 78, 34242]
>>> # Second way of sorting lists in python -- in place
... 
>>> lottery_numbers.sort()
>>> lottery_numbers
[1, 4, 11, 78, 34242]
>>> lottery_numbers.reverse()
>>> lottery_numbers
[34242, 78, 11, 4, 1]
>>> type(lottery_numbers)
<class 'list'>
>>> dir(lottery_numbers)
['__add__', '__class__', '__contains__', '__delattr__', '__delitem__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__gt__', '__hash__', '__iadd__', '__imul__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__reversed__', '__rmul__', '__setattr__', '__setitem__', '__sizeof__', '__str__', '__subclasshook__', 'append', 'clear', 'copy', 'count', 'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort']
>>> help(reverse)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'reverse' is not defined
>>> help(list.reverse)
Help on method_descriptor:

reverse(self, /)
    Reverse *IN PLACE*.

>>> len(lottery_numbers)
5
>>> names = ["Nina", "Max"]
>>> names.append("Jimmmy")
>>> names
['Nina', 'Max', 'Jimmmy']
>>> len(names)
3
>>> # insert into list -- my_list(pos, value)
...
>>> names.insert(0, 'Rose')
>>> names
['Rose', 'Nina', 'Max', 'Jimmmy']
>>> help(list.insert)
Help on method_descriptor:

insert(self, index, object, /)
    Insert object before index.

>>> names = ["Nina", "Max"]
>>> colors = ["Red", "Blue"]
>>> names.extend(colors)
>>> names
['Nina', 'Max', 'Red', 'Blue']
>>>
>>> names = ["Nina", "Max", "Phillip", "Nina"]
>>> "Rose" in names
False
>>> "Nina" in names
True
>>> names.index("Max")
1
>>> names.index("Nina")
0
>>> names.count("Max")
1
>>> names.count("Nina")
2
>>> names[0] = "Jimmy"
>>> names
['Jimmy', 'Max', 'Phillip', 'Nina']
>>> pos = names.index["Phillip"]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'builtin_function_or_method' object is not subscriptable
>>> pos = names.index("Phillip") 
>>> names[pos] = "Floyd"
>>> names
['Jimmy', 'Max', 'Floyd', 'Nina']
>>> names[4]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: list index out of range
>>> names[4] = "Paul"
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: list assignment index out of range
>>> ["Nina", "Max"]
['Nina', 'Max']
>>> names.remove("Max")
>>> names
['Jimmy', 'Floyd', 'Nina']
>>> names = ["Nina", "Max", "Nina"]
>>> names.remove("Nina")
>>> names
['Max', 'Nina']
>>> names.remove("Floyd")
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: list.remove(x): x not in list
>>> names.pop()
'Nina'
>>> names
['Max']
>>> names = ["Nina", "Rose", "Max"]
>>> names.pop()
'Max'
>>> names
['Nina', 'Rose']
>>> len(names)
2
>>> names.pop(2)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: pop index out of range
>>>

>>> # Tuples
... 
>>> a = ()
>>> type(a)
<class 'tuple'>
>>> b = (1)
>>> type(b)
<class 'int'>
>>> c = (1,)
>>> type(c)
<class 'tuple'>
>>> (1, 2, 3, 4, 5)
(1, 2, 3, 4, 5)
>>> student = ("Marcy", 8, "History", 3.5)
>>> student(0)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object is not callable
>>> student(0_
  File "<stdin>", line 1
    student(0_
             ^
SyntaxError: invalid token
>>> student(0)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object is not callable
>>> student = ("Marcy", 8, "History", 3.5)
>>> student[0]
'Marcy'
>>> student[1]
8
>>> student[0] = "Nina"
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment
>>> student
('Marcy', 8, 'History', 3.5)
>>> name, age, subject, gpa = student
>>> name
'Marcy'
>>> age
8
>>> subject
'History'
>>> gpa
3.5
>>> foo, bar, baz = student
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: too many values to unpack (expected 3)
>>> name, age, subject, _ = student
>>> x = 1, 2, 3
>>> type(x)
<class 'tuple'>
>>>
>>> def http_status_code():
...     return 200, "OK"
... 
>>> http_status_code()
(200, 'OK')
>>> code, name = http_status_code()
>>> code
200
>>> name
'OK'
>>>

>>> # Sets
... 
>>> type({})
<class 'dict'>
>>> set()
set()
>>> {1}
{1}
>>> type({1})
<class 'set'>
>>> names = {"Nina", "Max", "Nina"}
>>> names
{'Nina', 'Max'}
>>> len(names)
2
>>> # Let's check for some hashes
... 
>>> hash("Nina")
343143760414751283
>>> hash([])
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unhashable type: 'list'
>>> {[]}
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unhashable type: 'list'
>>> names = {"Nina", "Max", "Rose", "Max", "Nina"}
>>> set(names)
{'Rose', 'Nina', 'Max'}
>>> set(names)
{'Rose', 'Nina', 'Max'}
>>> set(names)
{'Rose', 'Nina', 'Max'}
>>> my_set = {1, "a", 2, "b", "cat"}
>>> my_set
{'b', 1, 2, 'a', 'cat'}
>>> my_set[0]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object is not subscriptable
>>> # adding and removing from sets
... 
>>> colors = {"Red", "Green", "Blue"}
>>> colors.add("Pink")
>>> colors
{'Red', 'Green', 'Blue', 'Pink'}
>>> colors.discrd("Green")
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'set' object has no attribute 'discrd'
>>> colors.discard("Green") 
>>> colors
{'Red', 'Blue', 'Pink'}
>>> colors.discard("Zebra")
>>> colors.remove("Pink")
>>> colors
{'Red', 'Blue'}
>>> colors.remove("Pink")
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'Pink'
>>> colors
{'Red', 'Blue'}
>>> numbers = {1, 4, 5}
>>> colors.update(numbers)
>>> colors
{1, 4, 5, 'Red', 'Blue'}
>>> colors.update("Nina")
>>> colors
{1, 4, 5, 'Blue', 'i', 'n', 'a', 'Red', 'N'}
>>> # Set Operations
... 
>>> colors = {"Red", "Green", "Blue"}
>>> "Blue" in colors
True
>>> "Orange" in colors
False
>>> rainbow_colors = {"Red", "Orange", "Yellow", "Green", "Blue", "Violet"}
>>> favorite = {"Pink", "Black", "Blue"}
>>> favorite_colors = favorite          
>>> rainbow_colors
{'Green', 'Violet', 'Blue', 'Orange', 'Red', 'Yellow'}
>>> favorite_colors
{'Blue', 'Black', 'Pink'}
>>> # my_set.union(other_set)
... 
>>> # my_set | other_set
... 
>>> rainbow_colors | favorite_colors
{'Black', 'Green', 'Violet', 'Blue', 'Orange', 'Pink', 'Red', 'Yellow'}
>>> # intersection
...
>>> rainbow_colors & favorite_colors
{'Blue'}
>>>
>>> rainbow_colors ^ favorite_colors
{'Black', 'Green', 'Violet', 'Pink', 'Orange', 'Red', 'Yellow'}
>>> help(set)
Help on class set in module builtins:

class set(object)
 |  set() -> new empty set object
 |  set(iterable) -> new set object
 |  
 |  Build an unordered collection of unique elements.
 |
 |  Methods defined here:
^CTraceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "C:\Users\phili\Anaconda3\lib\_sitebuiltins.py", line 103, in __call__
    return pydoc.help(*args, **kwds)
  File "C:\Users\phili\Anaconda3\lib\pydoc.py", line 1893, in __call__
    self.help(request)
  File "C:\Users\phili\Anaconda3\lib\pydoc.py", line 1952, in help
    else: doc(request, 'Help on %s:', output=self._output)
  File "C:\Users\phili\Anaconda3\lib\pydoc.py", line 1672, in doc
    pager(render_doc(thing, title, forceload))
  File "C:\Users\phili\Anaconda3\lib\pydoc.py", line 1470, in <lambda>
    return lambda text: tempfilepager(plain(text), 'more <')
  File "C:\Users\phili\Anaconda3\lib\pydoc.py", line 1519, in tempfilepager
    os.system(cmd + ' "' + filename + '"')
KeyboardInterrupt
>>> help(set.union)
Help on method_descriptor:

union(...)
    Return the union of sets as a new set.
    
    (i.e. all elements that are in either set.)

>>> list(rainbow_colors)
['Green', 'Violet', 'Blue', 'Orange', 'Red', 'Yellow']
>>>



>>> # dictionaries in Python
... 
>>> {}
{}
>>> type({})
<class 'dict'>
>>> dict()
{}
>>> {1: 'one'}
{1: 'one'}
>>> nums = {"one": 1, "two": 2, "three": 3}
>>> type(nums)
<class 'dict'>
>>> nums
{'one': 1, 'two': 2, 'three': 3}
>>>
>>> {1: 1}
{1: 1}
>>> {1: ||}
  File "<stdin>", line 1
    {1: ||}
        ^
SyntaxError: invalid syntax
>>> {1: []}
{1: []}
>>> {[]: 1}
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unhashable type: 'list'
>>> # only immutable types can be used as dictionary keys!
... 
>>> nums
{'one': 1, 'two': 2, 'three': 3}
>>> nums['one'] 
1
>>> # what if i try to access the dictionary by position?
... 
>>> nums[0]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 0
>>>
>>> nums
{'one': 1, 'two': 2, 'three': 3}
>>> nums.get("four")
>>> nums["four"]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'four'
>>> 
>>> nums
{'one': 1, 'two': 2, 'three': 3}
>>> nums.get("one")
1
>>> nums.get("four"0
  File "<stdin>", line 1
    nums.get("four"0
                   ^
SyntaxError: invalid syntax
>>> nums.get("four") 
>>> nums.get("four", "default value") 
'default value'
>>> nums.get("one", "default value")  
1
>>> nums
{'one': 1, 'two': 2, 'three': 3}
>>> nums["four"] = 4
>>> nums
{'one': 1, 'two': 2, 'three': 3, 'four': 4}
>>> nums["two"] = "twwwooo"
>>> nums
{'one': 1, 'two': 'twwwooo', 'three': 3, 'four': 4}
>>> "one" in nums
True
>>> 
>>> colors = {"r": "Red", "g": "Green"}
>>> numbers = {1: "one", 2: "two"}
>>> colors
{'r': 'Red', 'g': 'Green'}
>>> numbers
{1: 'one', 2: 'two'}
>>> colors.update(numbers)
>>> colors
{'r': 'Red', 'g': 'Green', 1: 'one', 2: 'two'}
>>> colors = {"Green": ["Spinach"] }
>>> vegetables = colors
>>> vegetables
{'Green': ['Spinach']}
>>> type(vegetables["Green"]) 
<class 'list'>
>>> vegetables["Green"]).append("Apples")
  File "<stdin>", line 1
    vegetables["Green"]).append("Apples")
                       ^
SyntaxError: invalid syntax
>>> vegetables["Green"].append("Apples")  
>>> colors
{'Green': ['Spinach', 'Apples']}
>>> nums
{'one': 1, 'two': 'twwwooo', 'three': 3, 'four': 4}
>>> nums["two"] = 2
>>> nums
{'one': 1, 'two': 2, 'three': 3, 'four': 4}
>>> nums.keys()
dict_keys(['one', 'two', 'three', 'four'])
>>> nums.values()
dict_values([1, 2, 3, 4])
>>> nums.items()
dict_items([('one', 1), ('two', 2), ('three', 3), ('four', 4)])
>>> "one" in nums
True
>>>



>>> my_list = ["h", "e", "l", "l", "o"]
>>> my_list
['h', 'e', 'l', 'l', 'o']
>>> my_list.append("!")
>>> my_list
['h', 'e', 'l', 'l', 'o', '!']
>>> len(my_list)
6
>>> my_list[0]
'h'
>>> my_list[0:3]
['h', 'e', 'l']
>>> my_list[:3]  
['h', 'e', 'l']
>>> my_list[-1]
'!'
>>> my_list
['h', 'e', 'l', 'l', 'o', '!']
>>> my_list.remove("l")
>>> my_list
['h', 'e', 'l', 'o', '!']
>>> my_list.insert(2, "l")
>>> my_list
['h', 'e', 'l', 'l', 'o', '!']
>>> del my_list[0]
>>> my_list
['e', 'l', 'l', 'o', '!']
>>> last_item = my_list.pop()\
...
>>> last_item = my_list.pop() 
>>> last_item
'o'
>>> my_list
['e', 'l', 'l']
>>> "!" in my_list
False
>>> my_list.sort(reverse=True"
  File "<stdin>", line 1
    my_list.sort(reverse=True"
                             ^
SyntaxError: EOL while scanning string literal
>>> my_list.sort(reverse=True")
  File "<stdin>", line 1
    my_list.sort(reverse=True")
                              ^
SyntaxError: EOL while scanning string literal
>>> my_list.sort(reverse=True)  
>>> my_list
['l', 'l', 'e']
>>> my_list.insert(0, "o")
>>> my_list
['o', 'l', 'l', 'e']
>>> sorted(my_list, reverse=True)
['o', 'l', 'l', 'e']
>>> # Sets
... 
>>> type({})
<class 'dict'>
>>> my_set = set()
>>> type(my_set)
<class 'set'>
>>> my_set = {1, 2, 3}
>>> my_set 
{1, 2, 3}
>>> my_set.ad(4)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'set' object has no attribute 'ad'
>>> my_set.add(4)
>>> my_set.remove(2)
>>> my_set
{1, 3, 4}
>>> 2 in my_set
False
>>> my_set
{1, 3, 4}
>>> my_set.add(3)
>>> my_set
{1, 3, 4}
>>> my_other = {1, 2, 3}
>>> my_other_set = my_other
>>> my_set.union(my_other_set)
{1, 2, 3, 4}
>>> my_set.difference(my_other_set)
{4}
>>> my_set.intersection(my_other_set)
{1, 3}
>>>
>>> 
>>> type({3})
<class 'set'>
>>> type((3))
<class 'int'>
>>> type((3, ))
<class 'tuple'>
>>> my_tuple = 1
>>> my_tuple 
1
>>> my_tuple = 1,
>>> my_tuple      
(1,)
>>> my_tuple[1] = 2
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment
>>> person = ("Jim", 29, "Austin, TX")
>>> name, age, hometown = person
>>> name
'Jim'
>>> age
29
>>> hometown
'Austin, TX'
>>> my_dict = {"key": "value"}
>>> my_dict[0]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 0
>>> my_dict["hello"] = "world"
>>> my_dict["foo"] = "bar"
>>> my_dict
{'key': 'value', 'hello': 'world', 'foo': 'bar'}
>>> my_dict["hello"]
'world'
>>> my_dict.get("hello")
'world'
>>> my_dict["baz"]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'baz'
>>> my_dict.get("baz")
>>> my_dict.get("baz", "default")
'default'
>>> my_dict.get("foo", "default")
'bar'
>>> my_dict.keys()
dict_keys(['key', 'hello', 'foo'])
>>> my_dict.value()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'dict' object has no attribute 'value'
>>> my_dict.values() 
dict_values(['value', 'world', 'bar'])
>>> my_dict.items()
dict_items([('key', 'value'), ('hello', 'world'), ('foo', 'bar')])
>>> # mutability
... my_list = [1, 2, 3]
>>> my_list[0] = 'a'
>>> my_list
['a', 2, 3]
>>> my_dict = {"hello": "world"}
>>> my_dict["foo"] = "bar"
>>> my_dict
{'hello': 'world', 'foo': 'bar'}
>>> my_set = {1, 2, 3}
>>> 
>>> my_set[0] = 'a'  # can't do this
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object does not support item assignment
>>> my_set.add('a')
>>> my_set
{1, 2, 3, 'a'}
>>>
>>> my_tuple = {1, 2, 3}
>>> my_tuple[0]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object is not subscriptable
>>> my_tuple = (1, 2, 3)
>>> my_tuple[0]
1
>>> my_tuple[0] = 'a'
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment




>>> # truthiness
... 
>>> True
True
>>> False
False
>>> type(True)
<class 'bool'>
>>> bool(True)
True
>>> bool(0)
False
>>> bool(0) # Falsey-y
False
>>> bool(1) # Truthy
True
>>> bool(-1)
True
>>> bool([])
False
>>> bool({})
False
>>> bool(())
False
>>> bool(set())
False
>>> bool([1])
True
>>> bool(1, ))
  File "<stdin>", line 1
    bool(1, ))
             ^
SyntaxError: invalid syntax
>>> bool((1, )) 
True
>>> bool({1})
True
>>> bool({1: 1})
True
>>> bool(None)
False
>>> # don't name your variables True, False, None
... 
>>> bool("")
False
>>> bool("Hello!")
True
>>> 3 < 5
True
>>> 5 > 3
True
>>> 1 <= 3
True
>>> 5 >= 5
True
>>> 5 >= 3
True
>>> "T" < "t" # upper case letters are lower-valued in ASCII
True
>>> "t" < "T"
False
>>> a" < "b"
  File "<stdin>", line 1
    a" < "b"
         ^
SyntaxError: invalid syntax
>>> "a" < "b" 
True
>>> "bat" < "cat"
True
>>> 1 == 1
True
>>> "Hello" == "Hello"
True
>>> [1, 2, 3] == [0, 2, 3]
False
>>> [1, 2, 3] == [1, 2, 3]
True
>>> a = [1, 2, 3]
>>> b = [1, 2, 3]
>>> a == b
True
>>> a != b
False
>>> # equality == !=
... # identity is keyword 
... 
>>> x = None
>>> x is none
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'none' is not defined
>>> x is None
True
>>> x is True
False
>>> x is False
False
>>> a
[1, 2, 3]
>>> b
[1, 2, 3]
>>> a is b
False
>>> a == b
True
>>>
>>> a = None
>>> a is None
True
>>> a is not None
False
>>> # and, or, not
... 
>>> a = True
>>> b = True
>>> a and b
True
>>> [1] and [2]
[2]
>>>
>>> a = False
>>> b = True
>>> a and b
False
>>> a = False
>>> b = False
>>> a and b
False
>>> [] and {}
[]
>>> [] and {1}
[]
>>> a = True
>>> b = True
>>> a or b
True
>>> [1] or [2]
[1]
>>> a = False
>>> b = True
>>> a or b
True
>>> [] or [1]
[1]
>>> 0 or 1
1
>>>
>>> not False
True
>>> not True
False
>>> bool(1)
True
>>> not 1
False
>>> bool(0)
False
>>> not 0  
True
>>> a = True
>>> b = True
>>> c = False
>>> a and (b or c)
True
>>> 10 > 5
True
>>> 5 < 10
True
>>> 5 == 5
True
>>> 5 !=5
False
>>> if 5:
...     print("Hello")
... 
Hello
>>> 1 == False
False
>>> 1 == True
True
>>> 0 == False
True
>>> [] or [1]
[1]
>>> [1] or [2]
[1]
>>> [] or [1]
[1]
>>> ["x"] or [1]
['x']
>>> [] or {}
{}
>>> [] and {}
[]
>>> False and True
False
>>> [1] and {1}
{1}
>>> not False
True
>>> not []
True
>>> "Hello" and None
>>> 
>>> 
>>> a = True
>>> b = True
>>> c = True
>>> a and b and c
True
>>>



>>> colors = ["Red", "Green", "Blue"]
>>> for color in colors
  File "<stdin>", line 1
    for color in colors
                      ^
SyntaxError: invalid syntax
>>> for color in colors:
... Readline internal error
Traceback (most recent call last):
  File "C:\Users\phili\Anaconda3\lib\site-packages\pyreadline\console\console.py", line 768, in hook_wrapper_23
    res = ensure_str(readline_hook(prompt))
  File "C:\Users\phili\Anaconda3\lib\site-packages\pyreadline\rlmain.py", line 571, in readline
    self._readline_from_keyboard()
  File "C:\Users\phili\Anaconda3\lib\site-packages\pyreadline\rlmain.py", line 536, in _readline_from_keyboard
    if self._readline_from_keyboard_poll():
  File "C:\Users\phili\Anaconda3\lib\site-packages\pyreadline\rlmain.py", line 556, in _readline_from_keyboard_poll
    result = self.mode.process_keyevent(event.keyinfo)
  File "C:\Users\phili\Anaconda3\lib\site-packages\pyreadline\modes\emacs.py", line 243, in process_keyevent
    r = self.process_keyevent_queue[-1](keyinfo)
  File "C:\Users\phili\Anaconda3\lib\site-packages\pyreadline\modes\emacs.py", line 286, in _process_keyevent
    r = dispatch_func(keyinfo)
  File "C:\Users\phili\Anaconda3\lib\site-packages\pyreadline\modes\basemode.py", line 257, in complete
    completions = self._get_completions()
  File "C:\Users\phili\Anaconda3\lib\site-packages\pyreadline\modes\basemode.py", line 200, in _get_completions
    r = self.completer(ensure_unicode(text), i)
  File "C:\Users\phili\Anaconda3\lib\rlcompleter.py", line 80, in complete
    readline.redisplay()
AttributeError: module 'readline' has no attribute 'redisplay'
  File "<stdin>", line 2

    ^
IndentationError: expected an indented block
>>> for color in colors:
... Readline internal error
Traceback (most recent call last):
  File "C:\Users\phili\Anaconda3\lib\site-packages\pyreadline\console\console.py", line 768, in hook_wrapper_23
    res = ensure_str(readline_hook(prompt))
  File "C:\Users\phili\Anaconda3\lib\site-packages\pyreadline\rlmain.py", line 571, in readline
    self._readline_from_keyboard()
  File "C:\Users\phili\Anaconda3\lib\site-packages\pyreadline\rlmain.py", line 536, in _readline_from_keyboard
    if self._readline_from_keyboard_poll():
  File "C:\Users\phili\Anaconda3\lib\site-packages\pyreadline\rlmain.py", line 556, in _readline_from_keyboard_poll
    result = self.mode.process_keyevent(event.keyinfo)
  File "C:\Users\phili\Anaconda3\lib\site-packages\pyreadline\modes\emacs.py", line 243, in process_keyevent
    r = self.process_keyevent_queue[-1](keyinfo)
  File "C:\Users\phili\Anaconda3\lib\site-packages\pyreadline\modes\emacs.py", line 286, in _process_keyevent
    r = dispatch_func(keyinfo)
  File "C:\Users\phili\Anaconda3\lib\site-packages\pyreadline\modes\basemode.py", line 257, in complete
    completions = self._get_completions()
  File "C:\Users\phili\Anaconda3\lib\site-packages\pyreadline\modes\basemode.py", line 200, in _get_completions
    r = self.completer(ensure_unicode(text), i)
  File "C:\Users\phili\Anaconda3\lib\rlcompleter.py", line 80, in complete
    readline.redisplay()
AttributeError: module 'readline' has no attribute 'redisplay'
  File "<stdin>", line 2

    ^
IndentationError: expected an indented block
>>> for color in colors:
...   print(color)
...
Red
Green
Blue
>>> range(5)
range(0, 5)
>>> list(range(5))
[0, 1, 2, 3, 4]
>>> for num in range(5):
...   print(num)
...
0
1
2
3
4
>>> for num in range(1, 5):
...   print(num)
...
1
2
3
4
>>> for num in range(1, 7, step= 2):
...   print(num)
...
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: range() takes no keyword arguments
>>> for num in range(1, 7, 2):
...   print(num)
...
1
3
5
>>> hex_colors = {"Red": "#FF", "Green": "#008"}
>>> for color in hex_colors:
...   print(color)
...
Red
Green
>>> for color in hex_colors.items():
...   print(color)
...
('Red', '#FF')
('Green', '#008')
>>> for label, hex in hex_colors.items():
...   print(label, hex)
...
Red #FF
Green #008
>>> colors
['Red', 'Green', 'Blue']
>>> for i, color in enumerate(colors):
...   print(f"index: {i}, color: {color})
  File "<stdin>", line 2
    print(f"index: {i}, color: {color})
                                      ^
SyntaxError: EOL while scanning string literal
>>> for i, color in enumerate(colors):
...   print(f"index: {i}, color: {color}")
...
index: 0, color: Red
index: 1, color: Green
index: 2, color: Blue
>>> hex_colors
{'Red': '#FF', 'Green': '#008'}
>>> for key, value in hex_colors:
...   print(key, value)
...
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: too many values to unpack (expected 2)
>>> a, b, c = (1, 2, 3, 4)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: too many values to unpack (expected 3)
>>> if 3 < 5:
... Readline internal error
Traceback (most recent call last):
  File "C:\Users\phili\Anaconda3\lib\site-packages\pyreadline\console\console.py", line 768, in hook_wrapper_23
    res = ensure_str(readline_hook(prompt))
  File "C:\Users\phili\Anaconda3\lib\site-packages\pyreadline\rlmain.py", line 571, in readline
    self._readline_from_keyboard()
  File "C:\Users\phili\Anaconda3\lib\site-packages\pyreadline\rlmain.py", line 536, in _readline_from_keyboard
    if self._readline_from_keyboard_poll():
  File "C:\Users\phili\Anaconda3\lib\site-packages\pyreadline\rlmain.py", line 556, in _readline_from_keyboard_poll
    result = self.mode.process_keyevent(event.keyinfo)
  File "C:\Users\phili\Anaconda3\lib\site-packages\pyreadline\modes\emacs.py", line 243, in process_keyevent
    r = self.process_keyevent_queue[-1](keyinfo)
  File "C:\Users\phili\Anaconda3\lib\site-packages\pyreadline\modes\emacs.py", line 286, in _process_keyevent
    r = dispatch_func(keyinfo)
  File "C:\Users\phili\Anaconda3\lib\site-packages\pyreadline\modes\basemode.py", line 257, in complete
    completions = self._get_completions()
  File "C:\Users\phili\Anaconda3\lib\site-packages\pyreadline\modes\basemode.py", line 200, in _get_completions
    r = self.completer(ensure_unicode(text), i)
  File "C:\Users\phili\Anaconda3\lib\rlcompleter.py", line 80, in complete
    readline.redisplay()
AttributeError: module 'readline' has no attribute 'redisplay'
  File "<stdin>", line 2

    ^
IndentationError: expected an indented block
>>> if 3 < 5:
...   print("hello")
...
hello
>>> if 3 > 5:
...   print("hello")
...
>>> a = []
>>> if a:
...   print("hello")
...
>>> b = [1, 2]
>>> if b:
...   print("hello")
...
hello
>>> a = True
>>> if a:
...   print("hello")
...
hello
>>> if a:
...   print("Hello!")
... else:
...   print("Goodbye")
...
Hello!
>>> a = false
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'false' is not defined
>>> a = false
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'false' is not defined
>>> a = False
>>> if a:
...   print("Hello!")
... else:
...   print("Goodbye")
...
Goodbye
>>> a = True
>>> b = True
>>> a = False
>>> if a:
...   print("1")
... elif:
  File "<stdin>", line 3
    elif:
        ^
SyntaxError: invalid syntax
>>> if a:
...   print("1")
... elif b:
...   print("2")
... else:
...   print("3")
...
2
>>>
>>>
>>> counter = 0
>>> max = 4
>>>
>>> while counter < max:
...   print(f"The count is: {counter}")
...   counter = counter + 1
...
The count is: 0
The count is: 1
The count is: 2
The count is: 3
>>> # using break
...
>>> names = ["Max", "Rose", "Nina", "Jimmy"]
>>> for name in names:
...   print(f"Hello, {name}")
...   if name == "Nina":
...     break
...
Hello, Max
Hello, Rose
Hello, Nina
>>> # continue
...
>>> names = ["Max", "Rose", "Nina", "Jimmy"]
>>> for name in names:
...   if name != "Nina":
...     continue
...   print(f"Hello, {name}")
...
Hello, Nina
>>>
>>> while True:
...
  File "<stdin>", line 2

    ^
IndentationError: expected an indented block
>>>
>>> count = 0
>>> while True:
...   count += 1
...   if count == 5
  File "<stdin>", line 3
    if count == 5
                ^
SyntaxError: invalid syntax
>>> while True:
...   count += 1
...   if count == 5:
...     print("count was reached")
...     break
...
count was reached
>>> def find_target_name(names):
...   for name in names:
...     print(name)
...     if name == "Nina":
...       return "Found the special case"
...
>>> names = ["Max", "Nina", "Rose"]
>>> find_target_names(names)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'find_target_names' is not defined
>>> find_target_name(names)
Max
Nina
'Found the special case'
>>>
