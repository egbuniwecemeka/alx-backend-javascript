#!/usr/bin/node

const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (data, error) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }
    });
  });

}

module.exports = countStudents;
