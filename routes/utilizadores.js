var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/admin/utilizadores', function (req, res, next) {
  res.render('utilizadores', { title: 'Plataforma Web' });
});

module.exports = router;