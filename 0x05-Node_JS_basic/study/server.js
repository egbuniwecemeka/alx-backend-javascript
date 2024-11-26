const {startServer} = require('node:http')

const host = '127.0.0.1'
const port = 3000

const server = startServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!');
});

server.listen()
