var express = require('express');
var router = express.Router();
var detailController = require('../controller/details')

/* GET home page. */
router.get('/add', function(req, res, next) {
  res.render('details', { title: 'Profile' });
});

// router.get('/add', function(req, res, next) {
//     res.render('details', { title: 'Profile' });
//   });

router.post('/add', detailController.createDetail)



router.get('/bdayIfToday/:id', detailController.bdayToday)

router.get('/allBday', detailController.getAllBday)

router.get('/fullname/:id',detailController.getFullname)



module.exports = router;
