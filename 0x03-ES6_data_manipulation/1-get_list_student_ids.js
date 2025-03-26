import getListStudents from './0-get_list_students.js';

export default function getListStudentIds(obj) {
  const array = [];

  if (!Array.isArray(obj)) {
    return [];
  } else {
    return getListStudents().map((iterate) => iterate.id);
  }
}
