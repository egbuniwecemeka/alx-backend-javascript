#!/usr/bin/node

const fs = require('fs');

function countStudents() {
// set path to the file
const filePath = './database.csv';

try {
  const data = fs.readFileSync(filePath, 'utf8');

  console.log(data)
} catch (error) {
  console.error('Cannot load the database')
}
}

module.exports = countStudents;