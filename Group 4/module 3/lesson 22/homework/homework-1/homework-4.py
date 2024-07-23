# Complete the solution so that it reverses all of the words within the string passed in.
# Words are separated by exactly one space and there are no leading or trailing spaces.

def reverse_words(s):
    new_s = (s.split()[::-1]) # split-ი გვიბრუნებს დაყოფილ სტრინგს, პარამენტრად შეგვიძლია დავუმატოთ გამყოფი
    return " ".join(new_s)

print(reverse_words("The greatest victory is that which requires no battle"))

def reverse_words(s):
    new_s = (s.split(" ")) # split-ი გვიბრუნებს დაყოფილ სტრინგს, პარამენტრად შეგვიძლია დავუმატოთ გამყოფი
    new_s.reverse()
    result =""
    for element in new_s:
        result += element + " "
    return result.strip()

print(reverse_words("The greatest victory is that which requires no battle"))