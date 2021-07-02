const { get } = require('./utils');

( async () => {
    console.log( await get(9) );
})();