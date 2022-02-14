const express = require('express');
const router = express.Router();
const path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200);
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(path.resolve(__dirname, '../tmp/earthquake.latest.json'));
});

module.exports = router;
