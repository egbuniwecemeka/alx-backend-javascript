#!/usr/bin/node

const app = require('http');

const host = '127.0.0.1';
const port = 1245;

const server = app.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

server.listen((host, port), () => {
  console.log(`The server is runnting at ${host}:${port}/`);
});

module.exports = app
