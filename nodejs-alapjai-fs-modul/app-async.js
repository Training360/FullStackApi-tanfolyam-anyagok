const { mkdir, writeFile, unlink } = require('fs').promises;
const { createReadStream, createWriteStream } = require('fs');
const { join } = require('path');
const { createGzip } = require('zlib');

const readStreamPromise =  (filePath, options) => {
    return new Promise( (resolve, reject) => {
        let data = '';
        const rs = createReadStream(
            filePath,
            options
        );

        rs.on('data', chunk => {
            console.log(chunk);
            data += chunk;
        });
        
        rs.on('end', () => {
            console.log(data);
            resolve(data);
        });
    });
};

const writeStreamPromise =  (filePath, options) => {
    return new Promise( (resolve, reject) => {
        let data = '';
        const rs = createWriteStream(
            filePath,
            options
        );

        rs.on('finish', () => {
            resolve(true);
        });
    });
};

( async () => {
    const settings = await readStreamPromise(
        join(__dirname, 'settings.json'),
        { encoding: 'utf8' }
    );

    await writeStreamPromise(
        join(__dirname, 'settings.json.bak'),
        { encoding: 'utf8' }
    );

})();