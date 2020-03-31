const express = require('express');
// Importing Frameworks
const http = require('http');
const configure = require('./configurations/configure');
const socket = require('./configurations/socket');

// Initializing App
const app = express();
const server = http.createServer(app);
configure(app);
// Starting up Socket.io
socket(server);


const PORT = process.env.PORT || 3020;



// Opening Port
server.listen(PORT, () => {
  console.log(`Server Listening on Port: ${PORT}`);
});
