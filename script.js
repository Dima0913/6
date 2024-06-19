class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(newRadius) {
        if (newRadius > 0) {
            this._radius = newRadius;
        } else {
            console.log('Радіус має бути більше нуля');
        }
    }

    get diameter() {
        return this._radius * 2;
    }

    calculateArea() {
        return Math.PI * Math.pow(this._radius, 2);
    }

    calculateCircumference() {
        return 2 * Math.PI * this._radius;
    }

}

const myCircle = new Circle(5);
console.log('Радіус кола:', myCircle.radius);
myCircle.radius = 10;
console.log('Новий радіус кола:', myCircle.radius);
console.log('Діаметр кола:', myCircle.diameter);
console.log('Площа кола:', myCircle.calculateArea());
console.log('Довжина кола:', myCircle.calculateCircumference());