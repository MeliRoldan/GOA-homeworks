#Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
 
def summation(num):
    sum = 0
    for i in range(num + 1):
        sum += i
    return sum
print(summation(2))

def summation_1 (num_1):
    return sum(range(num_1 + 1))
print(summation_1(2))
