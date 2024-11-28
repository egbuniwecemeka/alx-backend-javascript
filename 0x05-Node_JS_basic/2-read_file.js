#!/usr/bin/node

const fs = require('fs');

function countStudents(filePath) {
try {
  const data = fs.readFileSync(filePath, 'utf8');

  const rows = data.split('\n').filter((row) => row.trim() !== "");

  rows.forEach((row, index) => {
    console.log(`Row ${index}: ${row}`);
  })
  //const headers = rows[1].split()

} catch (error) {
  console.error('Cannot load the database')
}
}

module.exports = countStudents;