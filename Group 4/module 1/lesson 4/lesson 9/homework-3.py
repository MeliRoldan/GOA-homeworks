# user-ს შემოტანინეთ გოგოების და ბიჭების სახელების სია და დააწყვილეთ

girls = []
boys = []

for i in range(4) :
    girl_name = input("Enter girl's name:")
    boy_name = input("Enter boy's name:")

    girls.append(girl_name)
    boys.append(boy_name)

boy = 0
for name in girls :
    print(name + " " + boys[boy])
    boy +=1