// Chatty-server server.js

const express = require('express');
const SocketServer = require('ws').Server;

// Set the port to 4000
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
   .use(express.static('public'))
   .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');

// Broadcast current textbox contents on connection
  //wss.broadcast(currentContents);
// Handle messages
  //ws.on('message', handleMessage);
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));
});


// Broadcast - Goes through each client and sends message data
//wss.broadcast = function(data) {
  //wss.clients.forEach(function(client) {
    //client.send(data);
  //});
//};


// Handles incoming messages.
// Stores the current state of the textbox and broadcasts it
//function handleMessage(message) {
  //currentContents = message;
  //wss.broadcast(message);
//}


// Simply broadcasts the message back to all clients
//function echoBack(message) {
  //console.log(`Received: ${message}`)
 // wss.broadcast(message);
//}