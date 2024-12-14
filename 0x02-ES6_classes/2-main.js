import ALXCourse from "./2-hbtn_course";

const course = new ALXCourse('ES6', 1, ['Emeka', 'Chidewu']);
console.log(course.get_name);
course.set_name = "Python 101";
console.log(course);

try {
  course.set_name = 12;
} catch (err) {
  console.error(err);
}

try {
  const course2 = new ALXCourse('ES6', 1, ['Emeka', 'Chidewu']);
} catch (err) {
    console.log(err);
}
