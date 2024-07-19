# შექმენით გვარების სია და დაპრინტეთ რადენი ი და ა არის მთლიან სიაში.

surnames = ["მაღლაკელიძე", "სუხიაშვილი", "გვალია", "ჩხატარაშვილი", "ბეჟანიშვილი", "ცომაია", "ბერიძე"]

i_counter = 0
a_counter = 0

for element in surnames :
    for char in element :
        if char == "ი" :
            i_counter += 1
        elif char == "ა" :
            a_counter += 1
        
print("There are " + str(i_counter) + " ი-s and " + str(a_counter) + " ა-s in the list.")