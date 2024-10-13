import Shape from "./0-basic_rect_class";

const shape = new Shape(5, 10)

console.log(shape.getArea())
console.log([...shape.getSides()])