// შექმნით person კლასსი რომელსაც ექნება 4 კუთვნილება სახელი, გვარი, ემეილი და პაროლი, რომელსაც ექნება 4 მეთოდი, 2 get მეთოდი რომელსაც მოაქვს საჯარო წყაროები და 2 set მეთოდი რომელსაც გამოიყენებთ რომ შეცვალოთ ინფორმაციები

class Person {
    #password;
    constructor(firtsName, surName, email, password) {
        this.firtsName = firtsName;
        this.surName = surName;
        this.email = email;
        this.password = password;
    }

    get fullName () {
        return `${this.firtsName} ${this.surName}`
    }

    get personEmail () {
        return this.email
    }

    set changePass (newPass) {
        this.password = newPass
    }
}

let person1 = new Person("Meli", "Roldan", "meli@gmail.com", "1234")
console.log(person1.password)
person1.changePass = "11555"
console.log(person1.password)
