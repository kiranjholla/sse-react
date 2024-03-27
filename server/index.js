const SSEServer = require('sse-fake-server');

// Pass callback to SSEServer
SSEServer(client => {
  let counter = 0;
  // Every 2 seconds send data to client
  setInterval(() => {
    client.send(JSON.stringify({ data: counter++, name: 'SSE Ping' }));
  }, 2000);
});
