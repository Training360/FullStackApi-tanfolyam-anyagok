const { readFileSync, writeFileSync } = require('fs');
const { readFile, writeFile } = require('fs').promises;

const MovieApi = (path, prop) => ({
    async get() {
        const dataString = await readFile(path);
        return JSON.parse(dataString)[prop];
    },

    async save(data) {
        await writeFile(path, JSON.stringify({ [prop]: data }));
    }
})

module.exports = MovieApi;
