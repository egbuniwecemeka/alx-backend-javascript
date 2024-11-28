#!/usr/bin/node

const fs = require('fs');

function countStudents(filePath) {
try {
  const data = fs.readFileSync(filePath, 'utf8');

  const rows = data.split('\n');

  rows.forEach((row, index) => {
    console.log(`Row ${index.length}: ${row[1]}`);
  })
  //const headers = rows[1].split()

} catch (error) {
  console.error('Cannot load the database')
}
}

module.exports = countStudents;