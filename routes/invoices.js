var express = require('express');
var router = express.Router();

router.get('/invoices', function(req, res) {
    res.send('im the about page!');
});

module.exports = router;
