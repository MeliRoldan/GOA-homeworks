class shape {
    constructor(color) {
        this.color = color;
    }

    get clr() {
        console.log(`This is a ${this.color} shape.`);
    }
}

class circle extends shape {
    constructor(color, diameter) {
        super(color);
        this.diameter = diameter;
    }

    radius() {
        console.log(`This shape has a radius of ${this.diameter / 2}.`);
    }
}

class square extends shape {
    constructor(color, sides) {
        super(color);
        this.sides = sides;
    }

    area() {
        console.log(`This shape has an area of ${this.sides * 4}.`);
    }
}

const circle1 = new circle('Red', 13);
circle1.clr;
circle1.radius();

const square1 = new square('Green', 4);
square1.clr;
square1.area();
