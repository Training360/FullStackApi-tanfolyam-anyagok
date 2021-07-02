const http = require('http');
const router = require('./router/carRouter');

const port = 8080;

// GET, POST, PATCH, DELETE
const server = http.createServer( async (req, res) => {
    router[req.method.toLowerCase()](res);
});

server.listen( port, () => {
    console.log( `Server is running: http://127.0.0.1:${port}`);
});
