#!/usr/bin/python3
def concat(str1: str, str2: str) ->str:
    '''
    This is a function that take two strings as parameters and return their concatination
    types: string
    '''
    return str1 + str2

str1 = "egg"
str2 = "shell"

print(concat(str1, str2) == "{}{}".format(str1, str2))
print(concat.__annotations__)