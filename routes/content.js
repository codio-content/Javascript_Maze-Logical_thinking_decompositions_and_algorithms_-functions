
var path = require('path');
var fs = require('fs');
var express = require('express');

var router = express.Router();

// Add 10 walls without loop
router.get('/js-1', function(req, res) {
  res.render('js-1');
}); 




module.exports = router;



