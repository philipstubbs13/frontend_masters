```bash
>>> name = "Nina"
>>> dir(name)
['__add__', '__class__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'capitalize', 'casefold', 'center', 'count', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'format_map', 'index', 'isalnum', 'isalpha', 'isascii', 'isdecimal', 'isdigit', 'isidentifier', 'islower', 'isnumeric', 'isprintable', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'maketrans', 'partition', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill']
>>> type(name)
<class 'str'>
>>> dir(name)
['__add__', '__class__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'capitalize', 'casefold', 'center', 'count', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'format_map', 'index', 'isalnum', 'isalpha', 'isascii', 'isdecimal', 'isdigit', 'isidentifier', 'islower', 'isnumeric', 'isprintable', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'maketrans', 'partition', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill']
>>> dir(str)
['__add__', '__class__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'capitalize', 'casefold', 'center', 'count', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'format_map', 'index', 'isalnum', 'isalpha', 'isascii', 'isdecimal', 'isdigit', 'isidentifier', 'islower', 'isnumeric', 'isprintable', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'maketrans', 'partition', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill']
>>> help(str.upper)
Help on method_descriptor:

upper(self, /)
    Return a copy of the string converted to uppercase.

>>> q
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'q' is not defined
>>> import this
The Zen of Python, by Tim Peters

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!
>>> from __future__ import braces
  File "<stdin>", line 1
SyntaxError: not a chance
>>> import antigravity
>>> my_data = "this,is,a,comma,separated,string"
>>> my_data.split(",")
['this', 'is', 'a', 'comma', 'separated', 'string']
>>> student = "Mary,8,Math"
>>> student.split(",")
['Mary', '8', 'Math']
>>> name, age, subject = student.split(",")
>>> name
'Mary'
>>> age
'8'
>>> subject
'Math'
>>> my_data
'this,is,a,comma,separated,string'
>>> my_list = my_data.split(",")
>>> my_list
['this', 'is', 'a', 'comma', 'separated', 'string']
>>> ":".join(my_list)
'this:is:a:comma:separated:string'
>>> ", ".join(my_list)
'this, is, a, comma, separated, string'
>>> int("5")
5
>>> float("4.0")
4.0
>>> "100"
'100'
>>> str(50)
'50'
>>> "Today is the" + 30
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: can only concatenate str (not "int") to str
>>> "Today is the" + str(30)
'Today is the30'
>>> type(str(100))
<class 'str'>
>>> type(int('50'))
<class 'int'>
>>> int('50')
50
>>> float(
...
... float("3.14")
...
... float("3.14")
  File "<stdin>", line 5
    float("3.14")
        ^
SyntaxError: invalid syntax
>>> float("3.14")
3.14
>>> greeting = "hello"
>>> list(greeting)
['h', 'e', 'l', 'l', 'o']
>>> ",".join(list(greeting))
'h,e,l,l,o'
>>> my_chars = list(greeting)
>>> "".join(my_chars)
'hello'
>>> csv_row = "the,quick,brown,fox"
>>> csv_row.split(",")
['the', 'quick', 'brown', 'fox']
>>> names = ["Nina", "Bob", "Jeff", "Madeline", "Nina"]
>>> set(names)
{'Jeff', 'Bob', 'Nina', 'Madeline'}
>>> sorted(set(names))
['Bob', 'Jeff', 'Madeline', 'Nina']
>>> # list comprehensions
...
>>> names = ["Nina", "Max", "Jimmy"]
>>> "Nina".lower()
'nina'
>>> "Nina".upper()
'NINA'
>>> upper_names = []
>>> for name in names:
...   upper_case_name = name.upper()
...   upper_names.append(upper_case_name)
...
>>> upper_names
['NINA', 'MAX', 'JIMMY']
>>> [name.upper() for name in names]
['NINA', 'MAX', 'JIMMY']
>>> range(4)
range(0, 4)
>>> # Peek inside of range, just for debugging, not for production!
...
>>> list(range(4))
[0, 1, 2, 3]
>>> list(range(1, 4))
[1, 2, 3]
>>> list(range(1, 5, 2))
[1, 3]
>>> [num * num for num in range(6)]
[0, 1, 4, 9, 16, 25]
>>> names
['Nina', 'Max', 'Jimmy']
>>> [("length", len(name)) for name in names]
[('length', 4), ('length', 3), ('length', 5)]
>>> name = "Nina"
>>> f"The name is {name}"
'The name is Nina'
>>> names
['Nina', 'Max', 'Jimmy']
>>> ", ".join(f"The name is {name}")
'T, h, e,  , n, a, m, e,  , i, s,  , N, i, n, a'
>>> ", ".join([f"Name is {name}" for name in names])
'Name is Nina, Name is Max, Name is Jimmy'
>>> [num * num for num in range(6)]
[0, 1, 4, 9, 16, 25]
>>> 6 % 2
0
>>> bool(1)
True
>>> bool(-1)
True
>>> bool(0)
False
>>> 6 % 2
0
>>> bool(6 % 2)
False
>>> bool(6 % 2 == 0)
True
>>> [num * num for num in range(6)]
[0, 1, 4, 9, 16, 25]
>>> [num * num for num in range(6) if num % 2 == 0]
[0, 4, 16]
>>> even_squares = [num * num for num in range(6) if num % 2 == 0]
>>> ", ".join([str(even_square) for even_square in even_squares])
'0, 4, 16'
>>>



>>> squares = [num * num for num in range(6)]
>>> squares
[0, 1, 4, 9, 16, 25]
>>> sum(squares)
55
>>> min(squares)
0
>>> max(squares)
25
>>> sorted(squares)
[0, 1, 4, 9, 16, 25]
>>> sorted(squares, reverse=True)
[25, 16, 9, 4, 1, 0]
>>> lottery_numbers_string = "4, 5, 134, 10"
>>> lottery_nums = lottery_numbers_string
>>> lottery_nums.split(", ")
['4', '5', '134', '10']
>>> [int(num) for num in lottery_nums.split(", ")]
[4, 5, 134, 10]
>>> max([int(num) for num in lottery_nums.split(", ")])
134
>>> # 4 different "container" datatypes - lists, tuples, sets, dictionaries
...
>>> type({})
<class 'dict'>
>>> type({1})
<class 'set'>
>>> {num * num for num in range(11) }
{0, 1, 64, 4, 36, 100, 9, 16, 49, 81, 25}
>>> [ num * num for num in range(11) ]
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
>>> {num : num * num for num in range(11) }
{0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81, 10: 100}
>>> names
['Nina', 'Max', 'Jimmy']
>>> [f"The name is {name}" for name in names]
['The name is Nina', 'The name is Max', 'The name is Jimmy']
>>> dups_names = ["Nina", "Max", "Nina"]
>>> set(dups_names)
{'Max', 'Nina'}
>>> set([len(name) for name in dups_names])
{3, 4}
>>> [len(name) for name in dups_names]
[4, 3, 4]
>>> range(5)
range(0, 5)
>>> ([len(name) for name in dups_names])
[4, 3, 4]
>>> (len(name) for name in dups_names)
<generator object <genexpr> at 0x000001B9D58733C8>
>>> set((len(name) for name in dups_names))
{3, 4}
>>> set(len(name) for name in dups_names)
{3, 4}
>>> sum(len(name) for name in dups_names)
11
>>> max(len(name) for name in dups_names)
4
>>> min(len(name) for name in dups_names)
3
>>> (num * num for num in range(6))
<generator object <genexpr> at 0x000001B9D59D5E48>
>>> my_gen = (num * num for num in range(6))
>>> my_gen[0]
>>> my_gen = (num * num for num in range(6))
>>> for num in my_gen:
...   print(num)
...
0
1
4
9
16
25



>>> # Slicing
...
>>> my_string = "Hello, World!"
>>> my_string[0]
'H'
>>> my_string[-1]
'!'
>>> my_string[0:5]
'Hello'
>>> my_string[:5]
'Hello'
>>> my_string[7:12]
'World'
>>> names = ["Nina", "Max", "Rose", "Jimmy"]
>>> names[0]
'Nina'
>>> names[-1]
'Jimmy'
>>> names[0:2]
['Nina', 'Max']
>>> names[:2]
['Nina', 'Max']
>>> names[2:4]
['Rose', 'Jimmy']
>>> names[2:]
['Rose', 'Jimmy']
>>> names
['Nina', 'Max', 'Rose', 'Jimmy']
>>> new_names = names
>>> new_names.append("Phillip")
>>> new_names
['Nina', 'Max', 'Rose', 'Jimmy', 'Phillip']
>>> names
['Nina', 'Max', 'Rose', 'Jimmy', 'Phillip']
>>> names = ["Nina", "Max"]
>>> names[:]
['Nina', 'Max']
>>> news_names = names[:}
  File "<stdin>", line 1
    news_names = names[:}
                        ^
SyntaxError: invalid syntax
>>> news_names = names[:]
>>> news_names.append("Rose")
>>> names
['Nina', 'Max']
>>> news_names
['Nina', 'Max', 'Rose']
>>> my_string = "Hello, World!"
>>> my_string[-1]
'!'
>>> my_string[-2]
'd'
>>> my_string[-10:-4]
'lo, Wo'
>>> my_list = list(range(10))
>>> my_list
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> my_list[::2]
[0, 2, 4, 6, 8]
>>> my_list[::-1]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
>>> my_list
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> my_list[1:7:2]
[1, 3, 5]
>>> my_list[0]
0
>>> # talking about zip
...
>>> {num: num * num for num in range(11)}
{0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81, 10: 100}
>>> squares = {num: num * num for num in range(11)}
>>> squares.keys
<built-in method keys of dict object at 0x000001B9D5A7E5E8>
>>> squares.keys()
dict_keys([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
>>> squares.values()
dict_values([0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100])
>>> squares.items()
dict_items([(0, 0), (1, 1), (2, 4), (3, 9), (4, 16), (5, 25), (6, 36), (7, 49), (8, 64), (9, 81), (10, 100)])
>>> players = ["Nina", "Bob", "Alice"]
>>> scores = [100, 5, 97]
>>> zip(players, scores)
<zip object at 0x000001B9D5D51048>
>>> for item in zip(players, scores):
...   print(item)
...
('Nina', 100)
('Bob', 5)
('Alice', 97)
>>> for name, score in zip(players, scores):
...   print(f"Name: {name} had a score of {score}")
...
Name: Nina had a score of 100
Name: Bob had a score of 5
Name: Alice had a score of 97
>>> [f"Name: {name} had a score of {score}" for name, score in zip(players, scores)]
['Name: Nina had a score of 100', 'Name: Bob had a score of 5', 'Name: Alice had a score of 97']
>>> my_list1 = [1, 2, 3]
>>> my_list2 = ["a", "b"]
>>> zip(my_list1, my_list2)
<zip object at 0x000001B9D5D845C8>
>>> list(zip(my_list1, my_list2))
[(1, 'a'), (2, 'b')]
>>> list(zip(players, scores))
[('Nina', 100), ('Bob', 5), ('Alice', 97)]
>>> dict(zip(players, scores))
{'Nina': 100, 'Bob': 5, 'Alice': 97}
>>>





>>> # Comprehension, Slicing, Zip Exercise
...
>>> [for num in range(100) if num % 2 == 0]
  File "<stdin>", line 1
    [for num in range(100) if num % 2 == 0]
       ^
SyntaxError: invalid syntax
>>> [num in range(100) if num % 2 == 0]
  File "<stdin>", line 1
    [num in range(100) if num % 2 == 0]
                                      ^
SyntaxError: invalid syntax
>>> [num for num in range(100) if num % 2 == 0]
[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94,
96, 98]
>>> my_list = [num for num in range(100) if num % 2 == 0]
>>> import random
>>> help(random.randint)
Help on method randint in module random:

randint(a, b) method of random.Random instance
    Return random integer in range [a, b], including both end points.

>>> random.randint(0, 100)
90
>>> random.randint(0, 100)
73
>>> random.randint(0, 100)
68
>>> my_dict = {num: random.randint(0, 100) for num in my_list}
>>> my_list
[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94,
96, 98]
>>> my_dict.values()
dict_values([45, 66, 43, 52, 89, 93, 15, 82, 24, 93, 28, 42, 0, 46, 92, 59, 86, 94, 2, 69, 31, 81, 17, 62, 50, 9, 10, 96, 7, 74, 42, 77, 35, 29, 3, 11, 86, 61, 44, 49, 47, 91, 20, 34, 2, 84, 5, 4, 27, 13])
>>> set(my_dict.values())
{0, 2, 3, 4, 5, 7, 9, 10, 11, 13, 15, 17, 20, 24, 27, 28, 29, 31, 34, 35, 42, 43, 44, 45, 46,
47, 49, 50, 52, 59, 61, 62, 66, 69, 74, 77, 81, 82, 84, 86, 89, 91, 92, 93, 94, 96}
>>> {num for num in my_dict.values()}
{0, 2, 3, 4, 5, 7, 9, 10, 11, 13, 15, 17, 20, 24, 27, 28, 29, 31, 34, 35, 42, 43, 44, 45, 46,
47, 49, 50, 52, 59, 61, 62, 66, 69, 74, 77, 81, 82, 84, 86, 89, 91, 92, 93, 94, 96}
>>>
>>> list(range(100))
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
>>> my_list = [num for num in range(100)]
>>> my_list[30:70]
[30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69]
>>> my_list[30:70:2]
[30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68]
>>> my_lis
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'my_lis' is not defined
>>> my_list
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
>>> my_list[::-1]
[99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5,
4, 3, 2, 1, 0]
>>> my_list.reverse() # does the same thing
>>> my_list
[99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5,
4, 3, 2, 1, 0]
>>> my_list # .reverse() sorted in place
[99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5,
4, 3, 2, 1, 0]
>>> my_list.reverse()
>>> my_list
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
>>> my_list[::-1]
[99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5,
4, 3, 2, 1, 0]
>>> names = ["Nina", "Max", "Floyd", "Lloyd"]
>>> scores = [random.randit(0, 100) for name in names]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "<stdin>", line 1, in <listcomp>
AttributeError: module 'random' has no attribute 'randit'
>>> scores = [random.randint(0, 100) for name in names]
>>> scores
[64, 62, 80, 22]
>>> for name, score in zip(names, scores):
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
>>> for name, score in zip(names, scores):
...   print(f"{name} for {score} points")
...
Nina for 64 points
Max for 62 points
Floyd for 80 points
Lloyd for 22 points
>>> dict(zip(names, scores))
{'Nina': 64, 'Max': 62, 'Floyd': 80, 'Lloyd': 22}
>>> zip(names, scores)
<zip object at 0x000001B9D5A8FCC8>
>>> # what happens when generator is exhausted
...
>>> my_zip = zip(names, scores)
>>> for z in my_zip:
...  print(z)
...
('Nina', 64)
('Max', 62)
('Floyd', 80)
('Lloyd', 22)
>>> for z in my_zip:
...   print(z)
...
>>>





>>> True + True
2
>>> [1, 2, 3]
[1, 2, 3]
>>> str([1, 2, 3])
'[1, 2, 3]'
>>> repr([1, 2, 3])
'[1, 2, 3]'
>>> str(1)
'1'
>>> repr(1)
'1'
>>> import datetime
>>> now = datetime.datetime.now()
>>> str(now)
'2019-12-01 06:58:08.482093'
>>> repr(now)
'datetime.datetime(2019, 12, 1, 6, 58, 8, 482093)'
>>>
```