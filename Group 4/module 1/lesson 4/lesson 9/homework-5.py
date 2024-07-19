# დაუსვით მომხმარებელს მათემატიკური კითხვები, შეამოწმეთ პასუხები, დაითვალეთ და დაპრინტეთ რამდენი სწორი და არასწორი პასუხია

import random

print("There are 5 math questions in the test. Let's start:")

correct = 0
incorrect = 0

for i in range(5) :
    num_1 = random.randint(1,100)
    num_2 = random.randint(100,200)
    question = int(input(str(num_1) + " + " + str(num_2) + " ?"))
    if num_1 + num_2 == question :
        print("Answer is: Correct")
        correct +=1
    else:
        print("Answer is: Incorrect")
        incorrect +=1

print("Your correct answers: ", correct)
print("Your incorrect answers:", incorrect)
