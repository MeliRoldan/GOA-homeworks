# Complete the square sum function so that it squares each number passed into it and then sums the results together.
def square_sum(numbers):
    sum = 0
    for num in numbers:
        sum += num ** 2
    return sum

def square_sum(numbers):
    return sum(x ** 2 for x in numbers)