import listOfStudents from "./9-hoisting";

console.log(listOfStudents);


const eachStudent = listOfStudents.map(
  student => student.getFullStudentDescription()
)

console.log(eachStudent);
console.log(listOfStudents instanceof StudentHolberton);
console.log(listOfStudents instanceof StudentALX);