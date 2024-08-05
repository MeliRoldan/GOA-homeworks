# while - ულიმიტო გამეორების ფუნქცია სადამდე მისი მოთხოვნა არ დაკმაყოფილდება.
# def - ქმინს ფუნქციას და ინახავს მასში მოთავსებულ კოდს.
# return -  გვიბრუნებს ფუნქციის მნიშვნელობას.
# 2f - შეუზლია რიცხვის დამრგვალება ორ ათწილადამდე.
# len -  აბრუნებს ტექსტის რაოდენობას ობიექტში.
#break - საკვანძო სიტყვა გამოიყენება გასახსნელად  ან გასარღვევად კოდის



welcome = ("                                        <' W  E  L  C  O  M  E '>                              ") 
print(welcome)

project = ("<  GROUP 4  >   project participants : George Giorgobiani,  David Gzirishvili,  Meli Roldan , Elene Gharibovi. ")
print(project)

project_type = ("                                        <' PROJECT : ONLINE_BANK '>  ")
print(project_type)

meli = ("<  MELI : 32 to 55  >")                           
print(meli)
george = ("<  GEORGE :  The old transaction code consisted of 70 lines and 3051 letters while the new one consisted of 20 lines and 875 letters  102 to 122 >")
george_and_david = ("<  GEORGE AND DAVID : Davit built the skeleton  and Georgie optimized it the kode.  >")
print(george_and_david)
print(george)
david = ("<  DAVID : 59 to 99  and 102 to 122>")
print(david)
elene = ("<  ELENE : I gathered the group, helped the maximum, added comments, beauty and description of the project  and  129 to 182 >")
print(elene)


#Meli
def registration():                                                                         # აქ ვქმნით ფუნქციას registration რომელიც შეიცავს რეგისტრაციის კოდს
    print("Please Register!")
    full_name = input("Your name: ")
    new_password = input("Enter new password: ")                        
    repeat_password = input("Repeat the password: ")
    password_length = len(new_password)                                                     # len - აბრუნებს ტექსტის რაოდენობას ობიექტში.   
    bank_online = False
    has_upper = False
    for i in new_password:                                                                  # ეს ამოწმებს ნუთუ არის თუ არა კოდში uppercase ასო/ასოები
        if i.isupper():
            bank_online = True
            has_upper = True                                                              
            break                                                                            #  break - საკვანძო სიტყვა გამოიყენება გასახსნელად ან გასარღვევად.
    if repeat_password != new_password:                                                     # თუ repeat_password არ უდრის new_password ატყობინებს მომხმარებელს
        print("The passwords did not match!")
        bank_online = False
    elif password_length < 8:                                                               # თუ პაროლში 8-ზე ნაკლები სიმბოლოა ატყობინებს მომხარებელს
        print("Password can't be less than 8 symbols")
        bank_online = False
    elif has_upper != True:                                                                 # ეუბნება მომხმარებელს რომ uppercase ასო აკლია
        print("Password should have an uppercase letter")
    elif bank_online != False:
        bank_online = True
    return bank_online


# David 
friend_name = ""

def add_friend():                                                                           # ამ ვქმნით მეგობრების სია რმ მომავალში ფულის გადარიცხვა შევძლოთ.
    transfer_list = ["Dad",
                 "Mom",
                 "Best friend",
                 "Sister",
                 "Brother",
                 "Girlfriend",
                 "Casino",
                 "Different Bank account",
                 ]
    transfer_list.append(friend_name)
    return transfer_list



def show_balance():                                                                         # ეს არის ფუნქცია რომელიც გვიჩვენებს მომხმარებლის ბალანსს
    print(f"here is your balance>  ${balance:2f}.")                                         # 2f შეუძლია რიცხვის დამრგვალება ორ ათწილადამდე.


def cash_in():                                                                              # ფუნქცია რომელიც უფლებას გვაძლევს ბანკში შევიტანოთ ფული
    cash = float(input("How much money do you want to put in  "))
    if cash < 0:
        print ("you cant cash in a negative amount")
        return 0 
    else: 
        return cash


 
def withdraw():                                                                             # ფუნქცია რომელიც ბანკიდან ფულის გამოტანას გვაკეთებინებს
    cash=float(input("How much money do you want to withdraw  "))
    if cash > balance:
        print("you dont have that much money")
        return 0
    elif cash < 0:
        print("amount should be greater than 0 ")
        return 0
    else:
        return cash
# Davit built the skeleton  and Georgie optimized it the kode.    

def trans_friends():                                                                        # სხვა ექაუნთებში გადარიცხვის ფუნქცია
    print(add_friend())
    select_transfer = int(input("Who do you want to transfer money to?: ")) - 1 
    if select_transfer < 0:
        print("none existant")
        return 0

    elif select_transfer > len(add_friend()):
        print("You don't know that much people")
        return 0

    if select_transfer == select_transfer:
        transfer_amount = float(input(f"How much money do you want to transfer to {add_friend()[select_transfer]}"))
        if transfer_amount > balance:
            print("You dont have that much cash")
            return 0
        elif transfer_amount < 0 :
            print("You cant transfer a negative amount")
            return 0
        else:
            return transfer_amount


balance = 0 
bank_online = False

#Elene
while bank_online == False:
    bank_online = registration()


while bank_online:
    print("""

          Wellcome to the [cyber Bank]""")
    print("""
1  >show balance
2  >cash in 
3  >withdraw
4  >transfers
5  >add a friend 
6  >exit
""")
    operation = (input("which operation would you like?  > "))
    if operation == '1':
        show_balance()



    elif operation == "2":
        balance = balance + cash_in()



    elif operation == "3":
        balance= balance - withdraw()

    elif operation == "4":
        balance = balance - trans_friends()

    if operation == "5":
        friend_name = input("Who would you like to add?: ")


    elif operation == "6":
        print("""
              
            
              

            Come again!
              
              


              """)
        bank_online = False 


    else:
        print( "")