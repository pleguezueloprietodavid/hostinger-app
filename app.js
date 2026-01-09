
process.on('uncaughtException', err => {
  console.error('Uncaught exception:', err);
});
process.on('unhandledRejection', err => {
  console.error('Unhandled rejection:', err);
});

const http = require('http');

const port = process.env.PORT || 3000;
const host = '0.0.0.0';

console.log('Starting server on', host, port);

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
