import getListStudents from './0-get_list_students.js';

export default function getListStudentIds(obj) {
  const array = [];

  if (!Array.isArray(obj)) {
    return [];
  }

  array.push(getListStudents().map((iterate) => iterate.id))
  return array;
}
