var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
  	id: 1,
  	username: "admin"
  }, {
  	id: 2,
  	username: "user"
  }]);
});

module.exports = router;
