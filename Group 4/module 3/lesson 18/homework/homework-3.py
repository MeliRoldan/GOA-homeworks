# n = classmates, m = pages. calculate how many pages you neeed to copy

def paperwork(n, m):
    return n * m if n > 0 and m > 0 else 0

print(paperwork(2, 2))