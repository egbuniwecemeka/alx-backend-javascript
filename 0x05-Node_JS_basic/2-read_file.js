const fs = require('fs');

function countStudents(path) {
  try {
  // Read the file synchronously
  const data = fs.readFileSync(path, 'utf-8');

  // SPLIT DATA INTO ROWS
  const rows = data.trim().split('\n');

  // Process the header and student data rows
  const headers = rows[0].split(',');
  const studentsNum = rows.slice(1);

  // Group students by column
  const fieldIndex = headers.indexOf('field');
  const studentByField = {};

  studentsNum.forEach((row) => {
    const column = row.split(',');
    const field = column[fieldIndex]

    if (!studentByField[field]) {
      studentByField = []
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