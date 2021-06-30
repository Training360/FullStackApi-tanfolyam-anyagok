const http = require('http');
const path = require('path');
const fsp = require('fs').promises;

const logger = require('./module/logger');

const port = 8080;

const getHtmlContent = async (url) => {
    url = url === '/' ? '/index' : url;
    const filePath = path.join(
        __dirname,
        'view',
        `${url.replace(/\//g, '')}.html`
    );

    const content = await fsp.readFile(filePath, 'utf8');
    return content;
};

const server = http.createServer( async (req, res) => {
    logger.log(`Url: ${req.url}`, `Method: ${req.method.toUpperCase()}`);

    let content = 'Page Not Found!';
    try {
        content = await getHtmlContent(req.url);
    } catch(e) {
        console.log(e);
        res.statusCode = 404;
    }
    res.end(content);
});

server.listen( port, (err) => {
    logger.log(`Server is running on port ${port}`);
});
