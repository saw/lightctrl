var express = require('express');
var router = express.Router();
var api = require('node-itwinkle');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/setcolor/:color', function(req, res, next) {
	var color = req.params.color;
	api.setColor(color);
	res.end('OK');
});

router.post('/colorwave', function(req, res, next) {
	api.colorWave();
	res.end('OK');
});


router.post('/off', function(req, res, next) {
	api.off();
	res.end('OK');
});

module.exports = router;
