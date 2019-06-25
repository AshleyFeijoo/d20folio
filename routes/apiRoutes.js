const router =          require('express').Router();
const db =              require('../models'); //brings in our models
const seeds =           require ('../charSeeds.json');

router.route('/characters')
    .get( (req,res,err) => {
        //route all characters here
        res.json(seeds);
    });

router.route('/character')
    .post((req,res,err) =>{
        //make a new character
        res.send("");
    });

router.route('/characters/:id')
    .get((req,res,err) =>{
        //route a single character here
        res.json(seeds[0]);
    })
    .put((req,res,err) =>{
        // update a character
        res.send("");
    })
    .delete((req,res,err) =>{
        //delete a character
        res.send("");
    });


router.route('/characters/mine')
    .get((req,res,err) =>{
        //route all my characters here
        res.json(seeds)

    });

        
module.exports = router;