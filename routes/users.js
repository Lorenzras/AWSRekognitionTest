var express = require('express');
var router = express();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/abRANDOMcd', function (req, res) {
  res.send('ab*cd');

})

module.exports = router;
