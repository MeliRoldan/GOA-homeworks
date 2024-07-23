# You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

# As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

def monkey_count(n):
    count = []
    for i in range(1, n + 1): # აბრუნებს რიცხვებს 1 ინდექსიდან ანუ 1-დან n+1 ინდექსამდე ანუ ბოლო რიცხვის ჩათვლით
        count.append(i)
    return count

print(monkey_count(5))

def monkey_count(n):
    return range(1, n+1) # მოკლედ კოდი
