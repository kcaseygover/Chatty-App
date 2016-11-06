// Chatty-server server.js
'use strict'

const express = require('express');
const SocketServer = require('ws').Server;
var uuid = require('uuid');

// Set the port to 4000
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });
let counter = 0;
wss.on('connection', (ws) => {
  console.log('Client connected');
  counter ++;
  wss.broadcast(JSON.stringify({type:"counter", count:counter }))
  // Handle messages
  ws.on('message', handleMessage);
   // callback for when a client closes the socket.
  ws.on('close', () => {
    console.log('Client disconnected')
    counter --;
    wss.broadcast(JSON.stringify({type:"counter", count:counter}))
  });
});

function handleMessage(message) {
  const data = JSON.parse(message);
  switch (data.type) {
    case "postMessage":
      data.type = "incomingMessage"
      data.id = uuid.v4();
      wss.broadcast(JSON.stringify(data));
      break;
    case "postNotification":
      data.type = "incomingNotification"
      wss.broadcast(JSON.stringify(data));
      break;
    default:
      throw new Error("Unknown event type ", data.type);
  }
};

// Broadcast to all clients
wss.broadcast = function(message) {
  wss.clients.forEach(function(client) {
    client.send(message);
  });
};
