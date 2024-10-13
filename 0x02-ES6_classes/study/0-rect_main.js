import Shape from "./0-basic_rect_class";

const shape = Shape(5, 10)

console.log(shape.getArea())
console.log([...shape.getSides()])