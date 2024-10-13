/* A JS script showing static functionalities in classes */

export default class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    // static field
    static displayName = "Point"

    // static method
    static display(a, b) {
        const distX = a.x - b.x
        const distY = a.y - b.y

        return Math.hypot(distX, distY)
    }


}