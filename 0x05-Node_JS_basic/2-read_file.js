#!/usr/bin/node

const fs = require('fs');

function countStudents(filePath) {
try {
  const data = fs.readFileSync(filePath, 'utf8');

  const rows = data.split(',');
  console.log(rows)

} catch (error) {
  console.error('Cannot load the database')
}
}

module.exports = countStudents;