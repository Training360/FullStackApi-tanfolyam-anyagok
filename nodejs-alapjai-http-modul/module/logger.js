const getDateString = () => {
    const dateString = new Date()
        .toLocaleDateString('hu-HU')
        .replace(/\.[ ]*/g, '.');
    return `Date: ${dateString}`;
};

const log = (...args) => {
    console.log(`${getDateString()} ${args.join(' ')}`);
};

module.exports = {
    log
};
