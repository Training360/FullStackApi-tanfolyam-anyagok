const fsp = require('fs').promises;
const path = require('path');

module.exports = class JSONHandler {
    constructor() {
        this.data = [];
        this.init();
    }

    async init() {
        const filePath = path.join(__dirname, '..', 'db', 'db.json');
        const content = await fsp.readFile(filePath, 'utf8');
        this.data = JSON.parse(content);
    }

    async getAll(entity) {
        return this.data[entity];
    }

    async get(entity, id) {
        return this.data[entity].filter( e => parseInt(e.id) === parseInt(id) )[0];
    }

    async create(entity, data) {
        const filePath = path.join(__dirname, '..', 'db', 'db.json');
        console.log(this.data, data);
        this.data[entity].push(data);
        await fsp.writeFile( filePath, JSON.stringify(this.data), 'utf8' );
    }
};
