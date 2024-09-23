const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

// Uncomment this to pass the first stage
const server = net.createServer((socket) => {
  socket.on("close", () => {
    socket.write("HTTP/1.1 200 OK\r\n\r\n");

    // Log the response being sent
    console.log("Sent response: HTTP/1.1 200 OK");
    
    socket.end();
  });
});

server.listen(4221, "localhost");
