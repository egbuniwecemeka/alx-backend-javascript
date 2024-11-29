#!/usr/bin/node

const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

    //
    const rows = data.split('\n').filter((row) => row.trim() !== "");

    //
    const studentRows = rows.slice(1);

    //
    fields = {};

    //
    studentRows.forEach((row) => {
      const studentData = row.split(',');
      const field = studentData[studentData.length - 1];
      const name = studentData[0];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(name);
    })

    });
  });

}

module.exports = countStudents;
