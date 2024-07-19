name = input("Enter your name:")
age = int(input("Enter your age:"))
year = int(input("Enter current year:"))

for i in range (10) :
    print(name + " შენ იქნები " + str(age + i) + " წლის, " + str(year + i) + " წელს.")

seats = 10
while seats > 0 :
    print("Sell tickets: " + str(seats) + " are left.")
    seats = seats - 1