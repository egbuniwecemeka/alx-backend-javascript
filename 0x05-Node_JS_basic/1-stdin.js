#!/usr/bin/node

process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Ensure stdin is in flowing mode and encoding is set.
process.stddin.resume();
process.stdin,setEncoding('utf8');

process.stdin.on('data', (input) => {
    const name = input.trim()
  if (name !== null) {
    process.stdout.write(`Your name is: ${name}\n`);
  }
});

process.stdin.on('close', () => {
  console.log('This important software is now closing');
});