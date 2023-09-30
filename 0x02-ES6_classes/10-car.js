export default class Car {
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    get brand() {
        return this._brand;
    }

    set brand(newBrand) {
        this._brand = newBrand;
    }

    get motor() {
        return this._motor;
    }

    set motor(newMotor) {
        this._motor = newMotor;
    }

    get color() {
        return this._color;
    }

    set color(newColor) {
        this._color = newColor;
    }

    cloneCar() {
        return new Car(this._brand, this._motor, this._color)
    }
}

// class TestCar extends Car {}

// const tc1 = new TestCar("Nissan", "Turbo", "Pink");
// const tc2 = tc1.cloneCar();

// console.log(tc1);
// console.log(tc1 instanceof TestCar);

// console.log(tc2);
// console.log(tc2 instanceof TestCar);

// console.log(tc1 == tc2);