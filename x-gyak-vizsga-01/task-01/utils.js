
const get = (list = [], id = 0) => {
    return list.find( item => item.id === id );
};

const create = (list = [], entity = {}) => {
    const id = list[list.length - 1].id + 1;
    const newEntity = {...entity, id};
    list.push( newEntity );
    return newEntity;
};

const update = (list = [], entity = {}) => {
    if (list.length < 1 || !entity.id) {
        return false;
    }

    const index = list.findIndex( item => item.id === entity.id );
    list[index] = {...list[index], ...entity};
    return list[index];
};

const remove = (list = [], id = 0) => {
    if (list.length < 1 || !id) {
        return false;
    }

    const index = list.findIndex( item => item.id === id );
    list.splice(index, 1);
    return true;
};

module.exports = {
    get,
    create,
    update,
    remove,
};
