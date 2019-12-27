const express = require("express");
const app = express();

const http = require("http");
http.globalAgent.maxSockets = 10;


app.disable("x-powered-by");

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With, APP_KEY");
    next();
});


var proxy = require('express-http-proxy');

app.use('/proxy', proxy('http://linkedgeodata.org/'));

server = app.listen(80, () => {
    const {address} = server.address();
    const {port} = server.address();
    console.debug("App listening at http://%s:%s", address, port);
});


// Handle SIGTERM gracefully
process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);
process.on("SIGHUP", gracefulShutdown);
function gracefulShutdown () {
    // Serve existing requests, but refuse new ones
    console.warn("Received signal to terminate: wrapping up existing requests");
    server.close(() => {
        // Exit once all existing requests have been served
        console.warn("Received signal to terminate: done serving existing requests. Exiting");
    process.exit(0)
})
}

