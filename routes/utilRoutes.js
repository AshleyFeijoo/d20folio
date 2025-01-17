const router = require('express').Router();
const db = require('../models'); //brings in our models


router.get('/seed', (req, res, err) => {
    const seeds = require('../charSeeds.json');

    //PROMISE.ALL TAKES AN ARRAY OF PROMISES AND WAITS UNTIL ALL THE SEEDS ARE FINISHED 
    Promise.all(
    seeds.map(character => db.Character.create(character))
    )
        .then(characters => res.json(characters));
})

module.exports = router;