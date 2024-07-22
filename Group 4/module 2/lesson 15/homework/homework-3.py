# Write a function that removes the spaces from the string, then return the resultant string.

def no_space(x):
    new_string = ""
    for char in x:
        if char != " ":
            new_string += char
    return new_string

print(no_space("me li"))

def no_space(x):
    return x.replace(' ' ,'')
print(no_space("me li"))