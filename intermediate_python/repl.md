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
```