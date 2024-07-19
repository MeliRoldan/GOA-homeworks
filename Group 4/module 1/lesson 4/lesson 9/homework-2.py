# user-ს შემოატანინეთ წინადედება და დათვალეთ თანხმოვნები

sentence = input("Enter your sentence:")
vowels = "aeiouAEIOU"

cons_count = 0 

for char in sentence :
    if char not in vowels :
        cons_count += 1
print("There are " + str(cons_count) + " consonants in the sentence.")
