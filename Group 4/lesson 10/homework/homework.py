# შექმენით სია ადამიანების და რენდომ აარჩიეთ, კითხვაზე პასუხის გაცეის შემდეგ თუ სწორად უპასუხა ემატება 10 ქულა , თუ არა აკლდება 10

import random

participants = ["Meli", "Nika", "Giorgi", "Luka", "Ana"]
answer = ["True", "False"]
points = 0

i = 0
while i < 5 :
    ram_participant = random.choice(participants)
    print("The participant chosen is: " + ram_participant)
    num1 = random.randint(1,5)
    num2 = random.randint(1,10)
    print("The question is: " + str(num1) + " > " + str(num2) + " ?")
    answer = input("Write your answer: ")
    question = num1 > num2
    if str(question) == answer :
        points += 10
        print(answer, ". You got ", points, " points.")
    else:
        points -= 10
        print(answer, ". You got ", points, " points.")
    i += 1
    