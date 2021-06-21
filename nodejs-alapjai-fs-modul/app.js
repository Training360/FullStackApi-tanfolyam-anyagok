const { mkdir, writeFile, unlink } = require('fs').promises;
const { createReadStream, createWriteStream } = require('fs');
const { join } = require('path');
const { createGzip } = require('zlib');

// 1. Read the source file.
const sourcePath = join(__dirname, 'settings.json');
const readSettings = createReadStream(
    sourcePath,
    { encoding: 'utf8' }
);

// 2. Write content of the source file to the target file.
const targetPath = join(__dirname, 'settings.json.bak');
const writeBak = createWriteStream(
    targetPath,
    { encoding: 'utf8' }
);

// 3. Read content of target and zip it.
const readTarget = createReadStream(
    targetPath,
    { encoding: 'utf8' }
);

// 4. Write the content of gzipped settings to the .zip file.
const writeZip = createWriteStream(
    join(__dirname, 'settings.json.bak.gz'),
    { encoding: 'utf8' }
);

// read source -> write target -> compress target -> delete source and target
readSettings.pipe(writeBak);
writeBak.on('finish', () => {
    readTarget.pipe( createGzip() ).pipe(writeZip);
});

writeZip.on('finish', () => {
    unlink(sourcePath);
    unlink(targetPath);
});
