var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  req.requestTime = Date.now();
  console.log( req.requestTime);
});

router.get('/about', function (req, res) {
  res.send('about');
})

router.get('/ab*cd', function (req, res) {
  res.send('ab*cd');

})

router.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})

router.get('/flights/:from-:to', function (req, res) {
  res.send(req.params)
})

module.exports = router;
