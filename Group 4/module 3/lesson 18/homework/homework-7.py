# Write a function findNeedle() that takes an array full of junk but containing one "needle". After your function finds the needle it should return a message (as a string) that says: "found the needle at position " plus the index it found the needle,
def find_needle(haystack):
    # your code here
    return f"found the needle at position {haystack.index("needle")}" # f-string ფორმატირება გვაძლევს საშუალებას რომ იოლად დავაფორმატოთ სხვადსხვა სახის მონაცემი სტრინგად

print(find_needle(["hay", "junk", "hay", "needle", "hay", "moreJunk", "randomJunk"]))