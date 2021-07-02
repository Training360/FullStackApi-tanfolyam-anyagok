const http = require('http');
const { getAll } = require('./utils');

const port = 8080;

const server = http.createServer( async (req, res) => {
    const list = await getAll();
    res.setHeader('Content-Type', 'application/json');
    res.end( JSON.stringify(list) );
});

server.listen( port, () => {
    console.log( `Server is running: http://127.0.0.1:${port}`);
});
