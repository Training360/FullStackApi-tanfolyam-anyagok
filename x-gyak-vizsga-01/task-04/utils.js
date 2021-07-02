const fsp = require('fs').promises;
const { join } = require('path');

const jsonPath = join(__dirname, 'db', 'cars.json');

const getList = async () => {
    const content = await fsp.readFile(jsonPath, 'utf8');
    return JSON.parse(content); // string -> array
};

const saveList = async (list = []) => {
    await fsp.writeFile(jsonPath, JSON.stringify(list, null, 4), 'utf8');
    return true;
};

const getAll = async () => {
    return await getList();
};

module.exports = {
    getAll,
};
