#!/usr/bin/node

const fs = require('fs');

function countStudents(filePath) {
try {
  // Read data from file
  const data = fs.readFileSync(filePath, 'utf8');

  // Split data into rows seperated by a newline
  const rows = data.split('\n').filter((row) => row.trim() !== "");

  // Extract header and student data (number)
  const header = rows[0].split(',');
  const studentRows = rows.slice(1);

  // Group students by field of study
  const fields = {};

  studentRows.forEach((row) => {
    const studentData = row.split(',');
    console.log(studentData)
    const field = studentData[studentData.length - 1]
    const name = studentData[0];
    console.log(field);
    console.log(name);
  })


  console.log(`Number of students: ${studentRows.length}`);
  console.log(header);

} catch (error) {
  console.error('Cannot load the database')
}
}

module.exports = countStudents;