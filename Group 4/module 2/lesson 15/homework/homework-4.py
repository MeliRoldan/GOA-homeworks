# Nathan loves cycling.
# Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
# You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

def litres(time):
    return int(0.5 * time)

print(litres(5))

def count_sheeps(sheep):
  # TODO May the force be with you
  return sheep.count(True)
print(count_sheeps([True, False, True]))