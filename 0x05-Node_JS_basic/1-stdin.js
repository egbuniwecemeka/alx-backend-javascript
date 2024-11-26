#!/usr/bin/node

process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Ensure stdin is in flowing mode and encoding is set.
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (input) => {
    process.stdout.write(`Your name is: ${input.trim()}\n`);
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
