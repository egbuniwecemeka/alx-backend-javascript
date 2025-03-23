import { listStudent } from "./9-hoisting";

const eachStudent = listStudent.map(
  student => student.getFullStudentDescription()
)

console.log(eachStudent);
