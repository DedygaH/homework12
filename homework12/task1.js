
const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<html><body>');
  res.write('<h1>System information</h1>');
  res.write(`Current user name: ${os.userInfo().username}<br>`);
  res.write(`OS type: ${os.type()}<br>`);
  res.write(`System work time: ${(os.uptime() / 60).toFixed(2)} minutes<br>`);
  res.write(`Current work directory: ${process.cwd()}<br>`);
  res.write(`Server file name: ${path.basename(__filename)}<br>`);
  res.write('</body></html>');
  res.end();
});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});
