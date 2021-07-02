const fsp = require('fs').promises;
const { join } = require('path');

const jsonPath = join('./db/cars.json');

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

const get = async (id = 0) => {
    const list = await getList();
    return list.find( item => item.id === id );
};

const create = async (entity = {}) => {
    const list = await getList();
    const id = list[list.length - 1].id + 1;
    const newEntity = {...entity, id};
    list.push( newEntity );

    await saveList(list);

    return newEntity;
};

const update = async (entity = {}) => {
    const list = await getList();

    const index = list.findIndex( item => item.id === entity.id );
    list[index] = {...list[index], ...entity};
    
    await saveList(list);
    
    return list[index];
};

const remove = async (id = 0) => {
    const list = await getList();
    const index = list.findIndex( item => item.id === id );
    list.splice(index, 1);
    
    await saveList(list);

    return true;
};


module.exports = {
    getAll,
    get,
    create,
    update,
    remove,
};
