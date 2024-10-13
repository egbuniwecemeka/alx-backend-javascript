export default class Shape {
    // There can be only one constructor per class
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    // Method
    calcArea() {
        return this.height & this.width
    }

    // Getter
    get getArea() {
        return this.calcArea
    }

    *getSides() {
        yield this.width
        yield this.height
    }
}
