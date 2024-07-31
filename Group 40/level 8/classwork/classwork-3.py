def registration():
    print("Please register.")
    fullname = input("Enter your full name: ")
    new_password = input("Enter new password: ")
    repeat_password = input("Repeat password: ")
    if new_password != repeat_password:
        print("The password didn't match.")
        return False
    else:
        print("You have registered.")
        return True
    
print(registration())