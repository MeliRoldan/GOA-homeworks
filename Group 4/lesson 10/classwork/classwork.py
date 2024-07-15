# შევქნმათ სახელების სია და პრიზების სია, რანდომად გამოვავლინოთ გამარჯვებული და პრიზი

import random

users = ["Meli", "Nino", "Nika", "Ana", "Tako", "Gio", "Saba", "Salome", "Zuka", "Lado", "Tiko"]
prize = ["Intership at GOA", "GOA gift card (200 GEL)", "Gym membership", "Healthy snacks", "Bonus lessons (2 lessons)"]

for i in range(3) :
    winner = random.choice(users)
    get_prize = random.choice(prize)
    print(winner, "won: -" , get_prize)
    users.remove(winner)
    prize.remove(get_prize)