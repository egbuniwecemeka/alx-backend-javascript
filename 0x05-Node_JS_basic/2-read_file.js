#!/usr/bin/node

const fs = require('fs');

function countStudents(filePath) {
try {
  const data = fs.readFileSync(filePath, 'utf8');

  const rows = data.split('\n');
  for (var row in rows) {
    console.log(row.length);
  }
  //const headers = rows[1].split()

} catch (error) {
  console.error('Cannot load the database')
}
}

module.exports = countStudents;