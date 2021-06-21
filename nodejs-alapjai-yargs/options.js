const option = ({ alias, describe, type = 'string', demandOption = true } = {}) => ({
    alias,
    describe,
    type,
    demandOption
});

const id = option({
    alias: 'i',
    describe: 'Movie ID',
    type: 'number'
});

const producer = option({
    alias: 'p',
    describe: 'Film producer'
});

const title = option({
    alias: 't',
    describe: 'Movie title'
});

module.exports = Object.freeze({
    id,
    producer,
    title
});
