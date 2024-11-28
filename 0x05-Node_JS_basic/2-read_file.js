#!/usr/bin/node

const fs = require('fs');

function countStudents(filePath) {
try {
  const data = fs.readFileSync(filePath, 'utf8');

  const rows = data.split('\n').filter((row) => row.trim() !== "");

  console.log(`Number of students: ${rows.length}`);

} catch (error) {
  console.error('Cannot load the database')
}
}

module.exports = countStudents;