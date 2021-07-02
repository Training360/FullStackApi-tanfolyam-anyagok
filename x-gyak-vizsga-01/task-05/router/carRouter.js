const carController = require('../controller/carController');

const router = {
    'get': async (res) => res.end( JSON.stringify( await carController.getAll() )),    
};

module.exports = router;
