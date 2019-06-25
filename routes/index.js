const router = require('express').Router();


router.use('/util', require('./utilRoutes'));
router.use('/util', require('./apiRoutes'));


router.use(function(req, res) {
    console.log(req.body)
  });





module.exports = router;