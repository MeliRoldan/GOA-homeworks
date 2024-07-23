# The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

# Task
# Given a year, return the century it is in.

import math

def century(year):
    # Finish this :)
    return math.ceil(year / 100) # math.ceil() მეთოდი გვაძლევს საშუალებას, რომ მიღებული რიცხვი დამრგვალდეს უახლოეს უდიდეს რიცხვამდე

print(century(1705))

def century(year):
    # Finish this :)
    return year // 100 if year % 100 == 0 else year // 100 + 1 # თუ წელი გაყოფილი 100-ზე არ ტოვებს ნაშთს დავაბრუნოთ შედეგი, თუ ტოვებს ნაშთს დავამტოთ ერთი (ორმაგი გამოყოფის ნიშანს ვიყენებთ რათა ნაშთის გარეშე გამოვიტანოთ მთელი რიცხვი)
print(century(2000))

def century(year):
    return (year + 99) // 100 # წელიწადს ვუმატებთ 99 და ვყობთ 100 უნაშთოდ რათა მივიღოთ უნაშთო შედეგი
print(century(1705))