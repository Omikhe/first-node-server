// Import the built-in Node.js modules for creating an HTTP server and working with the file system
const http = require("http");
const fs = require("fs");

// Set the port number for the server
const port = 3000;

// Create a new HTTP server instance
const server = http.createServer((req, res) => {
    // Set the response header with a status code of 200 (OK) and the Content-Type as text/html
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Read the index.html file from the file system
    fs.readFile('index.html', (error, data) => {
        // If an error occurred while reading the file
        if (error) {
            // Set the response status code to 404 (Not Found)
            res.writeHead(404);
            // Send an error message to the client
            res.write('Error: File Not Found');
        } else {
            // If the file was read successfully, send its contents to the client
            res.write(data);
        }
        // End the response
        res.end();
    });
});

// Start the server and listen for incoming requests on the specified port
server.listen(port, (error) => {
    // If an error occurred while starting the server
    if (error) {
        // Log the error to the console
        console.log("Something went wrong", error);
    } else {
        // If the server started successfully, log a message to the console
        console.log("Server is listening on port " + port);
    }
});