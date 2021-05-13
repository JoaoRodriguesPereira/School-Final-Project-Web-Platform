var express = require('express');
var router = express.Router();

/* GET viagem page. */
router.get('/', function (req, res, next) {
  res.render('encomendas', { title: 'Plataforma Web' });
});

/* GET profile page. */
router.get('/encomendas/:matricula&:data', function(req, res, next) {
  res.render('encomendas', { matricula: req.params.matricula, data: req.params.data, title: 'Plataforma Web'});
});

module.exports = router;