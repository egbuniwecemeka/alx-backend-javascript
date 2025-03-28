export default function getStudentsByLocation(students, city) {
  return students.filter((student) => {
    return student.location === city;
  });
}
