class human {
    constructor (name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    speaks() {
        console.log(`${this.name} speaks.`)
    }

    walks() {
        console.log(`${this.name} walks.`)
    }
}

class man extends human {
    constructor(name, surname, age, beard) {
        super(name, surname, age);
        this.beard = beard;
    }

    beardCare() {
        console.log(`${this.name} does beard care.`)
    }
}

class woman extends human {
    constructor(name, surname, age, longNails) {
        super(name, surname, age);
        this.longNails = longNails;
    }

    gelPolish() {
        console.log(`${this.name} does gel polish.`)
    }
}

const man1 = new man('Nika', 'Gumberidze', 30);
man1.speaks();
man1.walks();
man1.beardCare();

const woman1 = new woman('Meli', 'Roldan', 34);
woman1.speaks();
woman1.walks();
woman1.gelPolish();