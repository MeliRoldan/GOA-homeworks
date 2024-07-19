# მომხმარებელს შემოატანინეთ ნიშნები, გამოიანგარიშეთ საშუალო არითმეტიკული და 
  # თუ ცხრაზე მეტი იქნება დავუპრინტოთ:
    # გილოცავ მატრიცელო შენ გადმოგეცა 300 ლარიანი ბანძი ტოსტერი, რასაც შეალია შენი ცხოვრების წლები
  # თუ ის იქნება 5-ზე ნაკლები:
    # გილოცავ, შენ გაექეცი მატრიცას
  # თუ ის იქნება 5-დან 9-მდე:
    # YOU ARE MID
  # თუ ის იქნება 10-ზე მეტი ან 0-ზე ნაკლები:
    # There is something wrong with you

num_1 = int(input("Enter 1st number:"))
num_2 = int(input("Enter 2nd number:"))
num_3 = int(input("Enter 3rd number:"))
avg_num = (num_1 + num_2 + num_3) / 3

if 9 < avg_num :
    print("გილოცავ, მატრიცელო! შენ გადმოგეცა 300 ლარიანი ბანძი ტოსტერი, რასაც შეალიე შენი ცხოვრების წლები.")
elif avg_num < 5 :
    print("გილოცავ, შენ გაექეცი მატრიცას!")
elif avg_num >= 5 and avg_num < 9:
    print("YOU ARE MID!")
elif avg_num > 10 or avg_num < 0 :
    print("There is something wrong with you.")