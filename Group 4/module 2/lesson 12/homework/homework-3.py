# Codewars - Given an array of integers your solution should find the smallest integer.

def find_smallest_int(arr):
    smallest = arr[0]
    for element in arr:
        if element < smallest:
            smallest = element
    return smallest

print(find_smallest_int([5, 1, 10]))