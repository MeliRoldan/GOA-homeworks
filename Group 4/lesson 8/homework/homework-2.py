# ბილეთი ღირს 25 ლარი
# ბავშვებისთვის უფასო
# გვყავს 13 ადამიანი, აქედან 10 დიდია, 3 - ბავშვი
# გამოთვალეთ ჯამში რამდენი ლარი დასჭირდებათ

persons_age = [18, 5, 20, 38, 10, 18, 15, 27, 30, 28, 41, 35, 33]
ticket = 25

adult = 0
child = 0

for age in persons_age :
    if age >= 18 :
        adult += 1
    else:
        child += 1

print("You need $" + str(ticket * adult) + " for " + str(adult) + " adults.")
print("For " + str(child) + " children tickets are free.")