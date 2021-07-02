const db = require('../db/db');

const getAll = async () => await db.getAll();
const get = async (id) => await db.get(id);
const create = async (entity) => await db.create(entity);
const update = async (entity) => await db.update(entity);
const remove = async (id) => await db.remove(id);
const count = async () => {
    const list = await db.getAll();
    return list.length;
};

module.exports = {
    getAll,
    get,
    create,
    update,
    remove,
    count,
};