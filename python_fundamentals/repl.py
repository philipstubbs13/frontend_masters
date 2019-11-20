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