# Clock shows h hours, m minutes and s seconds after midnight.
# Your task is to write a function which returns the time since midnight in milliseconds.

def millisecods(h, m, s):
    return (h * 3600 + m * 60 + s) * 1000

print(millisecods(0,1,1))