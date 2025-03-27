import getListStudents from "./0-get_list_students.js";
import getStudentsByLocation from "./2-get_students.js";

const student = getListStudents();

console.log(getStudentsByLocation(student, 'San Francisco'));
