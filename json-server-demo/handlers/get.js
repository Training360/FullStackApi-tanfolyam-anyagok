const jsonClass = require('./json');

const JSONHandler = new jsonClass();

module.exports = class GETHandler {
    constructor() {}

    async response(req, res) {
        const urlParts = req.url.split('/');
        const entity = urlParts[1];
        const id = urlParts[2];

        if (!id) {
            const entityList = await JSONHandler.getAll(entity);
            return res.end( JSON.stringify(entityList) );
        } else {
            const entityItem = await JSONHandler.get(entity, id);
            return res.end( JSON.stringify(entityItem) );
        }
    }
};
