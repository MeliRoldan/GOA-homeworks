# Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

# Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

def lovefunc( flower1, flower2 ):
    if (flower1 + flower2) % 2 == 0: # თუ პირველი და მეორე არგუმენტის ჯამი გვაძლევს ლუწ რიცხვის, ე.ი. ორივე არგუმენტი იყო ლუწი ან კენტი, შესაბამისად ვაბრუნებთ ფოლსს
        return False
    return True
    
print(lovefunc(3, 2))