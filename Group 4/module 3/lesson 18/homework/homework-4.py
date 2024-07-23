#Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
# The output should be two capital letters with a dot separating them.
# It should look like this:
# Sam Harris => S.H
# patrick feeney => P.F

def abbrev_name(name):
    abbrev = name.split(" ") # სპლითით ვყობთ სტრინგს ორ ნაწილად სადაც დაშორებაა და ვიღებთ მასივს 2 ელემენტით
    return (abbrev[0][0] + "." + abbrev[1][0]).upper() # ვაბრუნდეთ მასივის პირველი ელემნტის პირველ ასოს + წერტილი + მეორე მასივის პირველი ასო და ბოლოში ასოებს ვადიდებთ

print(abbrev_name("meli roldan"))

def abbrevName(name):
    return ".".join(i[0] for i in name.split()).upper() # შემოკლებული კოდი
print(abbrevName("meli roldan"))