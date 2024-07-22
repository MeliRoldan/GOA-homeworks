# Codewars - Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

def repeat_str(n, s):
    new_string = ""
    for i in range(n):
        new_string += s
        i+1
    return new_string

print(repeat_str(3, "meli"))