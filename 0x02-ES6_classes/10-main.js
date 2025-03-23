import Car from "./10-car.js";

class TestCar extends Car {};

const first = new TestCar('Bugatti', 'v8', 'Black');
const prototype = first.cloneCar();
console.log(first);
console.log(first instanceof TestCar);

console.log(prototype);
console.log(prototype instanceof TestCar);

console.log(first === prototype);
