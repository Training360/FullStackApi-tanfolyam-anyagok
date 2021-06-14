const http = require('http');
const port = 3333;
const getClass = require('./handlers/get');
const postClass = require('./handlers/post');

const getHandler = new getClass();
const postHandler = new postClass();

const server = http.createServer( async (req, res) => {
    if (req.url === '/favicon.ico') {
        return res.end('{}');
    }

    if (/^\/$/.test(req.url)) {
        return res.end('{"error": "no entity."}');
    }

    switch( req.method.toLowerCase() ) {
        case 'get': await getHandler.response(req, res);
        break;
        case 'post': await postHandler.response(req, res);
        break;

        default: 
        return res.end('{"error": "unrecognized method."}');
    }
});

server.listen( port, (err) => {
    if (err) {
        return console.error('ERROR: ', err);
    }
    console.log(`Server is running in ${port} port.`);
});
