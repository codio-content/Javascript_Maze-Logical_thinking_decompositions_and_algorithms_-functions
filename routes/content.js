
var path = require('path');
var fs = require('fs');
var express = require('express');

var router = express.Router();

// Initialise function
router.get('/js-1', function(req, res) {
  res.render('js-1');
}); 

// Challenge scoring
router.get('/ch-1', function(req, res) {
  res.render('ch-1');
}); 

// Arguments
router.get('/js-2', function(req, res) {
  res.render('js-2');
}); 

// Challenge scoring parameter
router.get('/ch-2', function(req, res) {
  res.render('ch-2');
}); 

// Return demo
router.get('/js-3', function(req, res) {
  res.render('js-3');
}); 

// Return challenge
router.get('/ch-3', function(req, res) {
  res.render('ch-3');
}); 


module.exports = router;



