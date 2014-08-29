var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Base Site' });
});

/* GET page1. */
router.get('/page1', function (req, res) {
    res.render('page1', { title: 'Base Site' });
});

/* GET page2. */
router.get('/page2', function (req, res) {
    res.render('page2', { title: 'Base Site' });
});

module.exports = router;
