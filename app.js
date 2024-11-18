const http = require('http');

// Define routes
const routes = {
    '/': (req, res) => {
        const responseMessage = { message: "Welkom bij de server!" };
        res.write(JSON.stringify(responseMessage));
    },
    '/api/date': (req, res) => {
        const responseMessage = { date: new Date() };
        res.write(JSON.stringify(responseMessage));
    },
    '/api/random': (req, res) => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        const responseMessage = { random: randomNumber };
        res.write(JSON.stringify(responseMessage));
    },
    'default': (req, res) => {
        res.write(JSON.stringify({ message: "Pagina niet gevonden" }));
    }
};

// Create a server object
http.createServer(function (req, res) {
    // http header
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // Get the route handler or default to 'default'
    const routeHandler = routes[req.url] || routes['default'];

    // Call the route handler
    routeHandler(req, res);

    res.end();
}).listen(3000, function () {
    // The server object listens on port 3000
    console.log("server start at port 3000");
});
