const fs = require('fs');

function countStudents(path) {
  try {
  // Read the file synchronously
  const data = fs.readFileSync(path, 'utf-8');

  // split data into rows and extract headers
  const rows = data.trim().split('\n');
  const headers = rows[0].split(','); // Extract the first row as headers
  const studentsNum = rows.slice(1);  // Exclude the header row

  // Check if data is present
  if (studentsNum.length === 0) {
    console.log('No student data found');
    return;
  }

  // Find the index of the 'field' column
  const fieldIndex = headers.indexOf('field');
  if (fieldIndex === -1) {
    throw new Error ("The field column is missing in the file.");
  }

  // Group students by field
  const studentByField = {};

  studentsNum.forEach((row) => {
    const column = row.split(',');
    const field = column[fieldIndex]

    if (!studentByField[field]) {
      studentByField = [];
    }
    studentByField[field].push(column);
  });

  // Formatting output
  console.log(`Number of students: ${studentsNum.length}`);
  for(const [field, students] of Object.entries(studentByField)) {
    console.log(`Number of students in ${field}: ${students.length}`);
  }

  } catch (error) {
    console.log('Cannot load the database');
  }
}

module.exports = countStudents;