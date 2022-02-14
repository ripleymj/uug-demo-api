var express = require('express');
var router = express.Router();

let endpoints = [
  "/",
  "/earthquakes/latest"
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(endpoints, null, 2));
});

module.exports = router;
