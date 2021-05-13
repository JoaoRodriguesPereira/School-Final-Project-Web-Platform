var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:codigo', function (req, res, next) {
  res.render('encomenda', { codigo: req.params.codigo, title: 'Plataforma Web' });
});

module.exports = router;