#!/usr/bin/node

const fs = require('fs');

function countStudents(filePath) {
try {
  const data = fs.readFileSync(filePath, 'utf8');

  console.log(data)
} catch (error) {
  console.error('Cannot load the database')
}
}

module.exports = countStudents;