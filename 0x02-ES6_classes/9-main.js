import listOfStudents, {StudentHolberton, HolbertonClass} from "./9-hoisting";

console.log(listOfStudents);


const eachStudent = listOfStudents.map(
  student => student.getFullStudentDescription
)

console.log(eachStudent);
console.log(listOfStudents[0] instanceof StudentHolberton);
console.log(listOfStudents[0].holbertonClass instanceof HolbertonClass);
