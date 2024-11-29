#!/usr/bin/node

const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

    const rows = data.split('\n').filter((row) => row.trim() !== "");
    console.log(rows)
    const studentRows = rows.slice(1)

    fields = {};

    studentRows.forEach((row) => {
      const studentData = row.split(',')
      console.log(studentData)
    })

    });
  });

}

module.exports = countStudents;
