import getListStudents from './0-get_list_students.js';

export default function getListStudentIds(obj) {
  if (!Array.isArray(obj)) {
    return [];
  }

  return getListStudents().map((iterate) => iterate.id);
}
