#!/usr/bin/node

const fs = require('fs');

function countStudents(filePath) {
  try {
    // Read data from file
    const data = fs.readFileSync(filePath, 'utf8');

    // Split data into rows seperated by a newline
    const rows = data.split('\n').filter((row) => row.trim() !== '');

    // Extract student data (number)
    const studentRows = rows.slice(1);

    // Group students by field of study
    const fields = {};

    studentRows.forEach((row) => {
      const studentData = row.split(',');
      const field = studentData[studentData.length - 1];
      const name = studentData[0];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(name);
    });
    console.log(`Number of students: ${studentRows.length}`);

    // Formatting students per field
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
    } catch (error) {
      throw new Error('Cannot load the database');
    }
  }

module.exports = countStudents;
