const http = require('http');
const normalizePort = require('normalize-port');
const app = require('./app');

const port = normalizePort(process.env.PORT || '3100');
app.set('port', port);

const server = http.createServer(app);

server.listen(port, async () => {
  console.log(`listening on ${port}`);
});
