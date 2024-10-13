export default class Shape {
    // There can be only one constructor per class
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    // Method to calculate area
    calcArea() {
        return this.height * this.width
    }

    // Getter method to retrieve area
    get getArea() {
        return this.calcArea()
    }

    *getSides() {
        yield this.width
        yield this.height
        yield this.width
        yield this.height
    }
}
