const express = require('express');
const router = express.Router();
const personService = require('../service/person.service');

/* GET home page. */
router.get('/', async (req, res, next) => {
    const people = await personService.read();
    res.json(people);
});

router.get('/count', async (req, res, next) => {
    const people = await personService.read();
    const output = {
        count: people.filter( p => p.vaccine !== 'none' ).length
    };
    res.json(output);
});

module.exports = router;
