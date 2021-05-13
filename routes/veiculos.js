var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/admin/veiculos', function (req, res, next) {
  res.render('veiculos', { title: 'Plataforma Web' });
});

module.exports = router;