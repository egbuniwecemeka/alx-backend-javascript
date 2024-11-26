#!/usr/bin/node

const http = require('http');

const port = 1245;

// Create the HTTP server
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

// Start listening on port 1245
app.listen(port, () => {
  console.log(`The server is runnting at ${port}`);
});

module.exports = app;
