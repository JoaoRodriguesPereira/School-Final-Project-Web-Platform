var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Plataforma Web' });
});

/* GET profile page. */
router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'Plataforma Web' });
});

/* GET orders page. */
router.get('/encomendas', function(req, res, next) {
  res.render('encomendas', { title: 'Plataforma Web' });
});

/* GET encomenda page. */
router.get('/encomenda/:codigo', function(req, res, next) {
  res.render('encomenda', { codigo: req.params.codigo,  title: 'Plataforma Web'});
});

/* GET sobre page. */
router.get('/sobre', function(req, res, next) {
  res.render('sobre', { title: 'Sobre Nós' });
});

module.exports = router;
