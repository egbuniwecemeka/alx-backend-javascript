import { listOfStudent } from "./9-hoisting";

console.log(listOfStudent);


const eachStudent = listOfStudent.map(
  student => student.getFullStudentDescription()
)

console.log(eachStudent);
