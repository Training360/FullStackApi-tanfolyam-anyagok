const { update } = require('./utils');

(async () => {
    console.log(await update({
        "id": 5,
        "color": "Purple",
        "price": 10000
    }));
})();