export default class Shape {
    // There can be only one constructor per class
    constructor(width, height) {
        this.width = width
        this.height = height
    }

<<<<<<< HEAD
    // Method
    calcArea() {
        return this.height & this.width
    }
=======
const shape = new Shape(5, 10)
>>>>>>> 49193c3bfa5c738b6dc3c3d81750b0e10abd6e93

    // Getter
    get getArea() {
        return this.calcArea
    }

    *getSides() {
        yield this.width
        yield this.height
    }
}
