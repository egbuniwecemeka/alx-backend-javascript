const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

// Start listening on port 1245
app.listen(1245, () => {
  console.log(`The server is runnting at 1245`);
});

module.exports = app;
