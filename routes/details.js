var express = require('express');
var router = express.Router();
var detailController = require('../controller/details')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("details");
});

router.get('/add1', function(req, res, next) {
  res.render('details', { title: 'Profile' });
});
//request body case1
// router.post('/add', function(req, res, next){
    // console.log("FirstName", req.body.first);
    // console.log("LastName", req.body.last);
    // console.log("Address", req.body.address);
    // console.log("DOB", req.body.dob);
    // console.log("Phone", req.body.phone);
//     res.render('detail');
// });

//request params case2
// router.get('/add/:id/:name/:author', function(req, res, next) {
//     console.log("BookId", req.params.id);
//     console.log("BookName", req.params.name);
//     console.log("AuthorName", req.params.author)
//     res.render('book');
//   });

router.post('/', detailController.createDetails)
/*
router.get('/add', function(req, res, next) {
  res.send(details);
});
*/
module.exports = router;