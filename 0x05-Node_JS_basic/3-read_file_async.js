#!/usr/bin/node

const fs = require('fs');

function countStudents(filePath) {
  fs.readFileSync(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}

module.exports = countStudents;
