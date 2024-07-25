balance = 0 
bank_online = True

def cash_in():
    cash = float(input("How much do you want to cash in: "))
    if cash < 0:
        print ("You cant cash in negative amount.")
        return 0 
    else: 
        return cash

 
def withdrow():
    cash=float(input("Input the amount you want to withdrow: "))
    if cash > balance:
        print("You dont have that much money.")
        return 0
    elif cash < 0:
        print("Amount should be grater than 0.")
        return 0
    else:
        return cash

while bank_online:
    print("Wellcome to the bank!")
    print("""1 - Show balance
          2 - Cash in 
          3 - Witdrow
          4 - Exit
          """)
    operation = input("Witch operation do you need. Choose number: ")
    if operation == '1':
        print(balance)
    elif operation == "2":
        balance = balance + cash_in()
    elif operation == "3":
        balance= balance - withdrow()
    elif operation == "4":
        bank_online = False 
    else:
        print( "You didn't choose the correct number.")