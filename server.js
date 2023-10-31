const dgram = require('dgram');

// Define the server's IP address and port
const ip_address = '0.0.0.0'; // Listen on all available network interfaces
const port = 5959; // Use a different port, e.g., 8080

// Create a UDP server
const server = dgram.createSocket('udp4');

server.on('listening', () => {
    const address = server.address();
    console.log(`Server is listening on ${address.address}:${address.port}`);
});

server.on('message', (message, rinfo) => {
    console.log(`Received message from ${rinfo.address}:${rinfo.port}: ${message.toString('utf-8')}`);
});

server.bind(port, ip_address);
