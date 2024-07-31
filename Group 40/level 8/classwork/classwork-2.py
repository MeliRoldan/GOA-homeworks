def show_balance():                                         # აქ ჩვენ ამ ფუქნციას მივანიჭეთ კოდი, სადაჩ ეკრანზე პრინტავს მომხმარებლის ბალანსს, როდესაც ეს ფუნქცია არის გამოძახებული.
    print(f"here is your balance>  ${balance:2f}.")         # აქ ჩვენ def-ის გამოყენებით შევქმენით ფუნქცია show_balance.


def cash_in():
    cash = float(input("input how much u want to cash In  "))
    if cash < 0:
        print ("you cant cash in negative amount")
        return 0 
    else: 
        return cash


 
def withdrow():
    cash=float(input("input amount that u want to withdrow  "))
    if cash > balance:
        print("u dont have that much money")
        return 0
    elif cash < 0:
        print("amount shuld be grater than 0 ")
        return 0
    else:
        return cash

balance = 0 
bank_online = True
while bank_online:
    print("wellcome to these bank")
    print("""
1 show balance
2 cash in 
3 witdrow
4 exit
""")
    operation = (input("witch operation do u want chose numbre  "))
    if operation == '1':
        show_balance()



    elif operation == "2":
        balance = balance + cash_in()



    elif operation == "3":
        balance= balance - withdrow()


    elif operation == "4":
        bank_online = False 


    else:
        print( "you didnc chose correct numbre")