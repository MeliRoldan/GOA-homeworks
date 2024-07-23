# Your task is to find the first element of an array that is not consecutive.
# By not consecutive we mean not exactly 1 larger than the previous element of the array.
# E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
# If the whole array is consecutive then return null2.
# The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

def first_non_consecutive(arr):
    for i in range(0, len(arr) - 1): #ათვლას ვიწყებთ 0 ინდექისდან -1 ინდექსამდე რადგან მასივი 1-დან 4-ის ჩათვლით ელემენტებს შეიცავს, ციკლმა კი უნდა შეამოწმოს იქნდექსები 0-დან 3-ის ჩათვლით და არა 1-დან 4-ის ჩათვლით
        if arr[i] == arr[i + 1] - 1: # თუ ციკლის პირველი ინდექსი უდრის + 1 ინდესს  - 1 ე.ი. პირველი რიცხვი 1-ით ნალეკბია მომდევნოზე ანუ მომდევნო რიცხვი 1-ით მეტი წინაზე და გამოვტოვებთ. მაგალითად: პირველი ინდექსი arr[i] იქნება 0 რომელშიც ინახება რიცხვი 2 თუ 2 უდრი შემდეგი ინდექსში arr[i + 1] ანუ 0 + 1 ანუ 1 ინდექსში შენახრულ რიცხვს ანუ 3 - 1-ს, გამოდის რომ სხვაობა მხოლოდ ერთია.
            continue
        return arr[i + 1]
    return None

print(first_non_consecutive([2, 3, 4, 6]))