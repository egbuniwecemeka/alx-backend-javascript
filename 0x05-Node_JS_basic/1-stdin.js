#!/usr/bin/node

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (input) => {
  if (input !== null) {
    process.stdout.write(`Your name is: ${input}\n`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
