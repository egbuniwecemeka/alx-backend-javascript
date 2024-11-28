#!/usr/bin/node

const fs = require('fs');

function countStudents(filePath) {
try {
  // Read data from file
  const data = fs.readFileSync(filePath, 'utf8');

  // Split data into rows seperated by a newline
  const rows = data.split('\n').filter((row) => row.trim() !== "");

  const header = rows[0].split(',');
  const studentNum = rows.slice(1);
  console.log(`Number of students: ${studentNum.length}`);
  console.log(header);

} catch (error) {
  console.error('Cannot load the database')
}
}

module.exports = countStudents;