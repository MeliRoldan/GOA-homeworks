# მომხმარებელს შემოატანინეთ გოაში შემოყვანილი ადამიანების რაოდენობა და თითო შემოყვანილ ადამიანზე დაერიცოს 100 ₾  
# რამდენი დაგერიცხება თუ შემოყვანე 10? 13?
# რამდენი დაგერიცხება თუ შემოიყვანე 100 - 37 + 13 / 10 * 264

ref_count = input("Enter referral number:")

balance = 0

i = 1
while i < int(ref_count) :
    balance += i * 100
    i += 1

print("Your balance is: " + str(balance) + " GEL")
print(100 * (100 - 37 + 13) / 10 * 264)