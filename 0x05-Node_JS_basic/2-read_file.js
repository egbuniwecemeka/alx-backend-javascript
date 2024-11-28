#!/usr/bin/node

const fs = require('fs');

function countStudents(filePath) {
try {
  const data = fs.readFileSync(filePath, 'utf8');

  const rows = data.split(',');
  const headers = rows[0].split()
  console.log(headers)

} catch (error) {
  console.error('Cannot load the database')
}
}

module.exports = countStudents;