export default function getListStudents() {
  const array = [];
  const obj = { id: 1, firstName: 'Guillaume', location: 'San Francisco' };
  const obj2 = { id: 2, firstName: 'James', location: 'Columbia' };
  const obj3 = { id: 5, firstName: 'Serena', location: 'San Francisco' };
  array.push(obj, obj2, obj3);
  return array;
}
