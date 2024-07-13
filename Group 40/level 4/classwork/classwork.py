# in python we have 4 types of variables: string, integer, boolean, float
name = "Meli"
age = 30
print(name + " " + str(age + 15))

e = 10 // 2 #ამრგვალებს უმცირესამდე, მაგრამ უდიდესამდე არ ამრგვალებს
print(e)

print(int(4.6)) # ამრგვალებს

# დავალება 1: მომხმარებელს შემოტანინეთ ორი რიცხვი
# და ამ ორი რიცხვის გამოყენებით შევასრულოთ ყველა არითმეტიკული ამოცანები
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
print(num1 + num2)
print(num1 - num2)
print(num1 * num2)
print(num1 / num2)
print(num1 // num2)
print(num1 % num2)