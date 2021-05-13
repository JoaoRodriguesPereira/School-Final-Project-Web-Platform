var express = require('express');
var router = express.Router();

/* GET admin page. */
router.get('/', function (req, res, next) {
  res.render('admin', { title: 'Plataforma Web - ADMIN' });
});

/* GET viagem page. */
router.get('/utilizadores/viagensUtilizador/:email', function (req, res, next) {
  res.render('viagensUtilizador', { emailRecebido: req.params.email, title: 'Plataforma Web - ADMIN' });
});

/* GET profile page. */
router.get('/veiculos/encomendas/:matricula&:data', function(req, res, next) {
  res.render('encomendas', { matricula: req.params.matricula, data: req.params.data, title: 'Plataforma Web'});
});

/* GET viagem page. */
router.get('/ultimaLocalizacao/:email', function (req, res, next) {
  res.render('ultimaLocalizacao', { emailRecebido: req.params.email, title: 'Plataforma Web - ADMIN' });
});

/* GET utilizadores page. */
router.get('/utilizadores', function (req, res, next) {
  res.render('utilizadores', { title: 'Plataforma Web - ADMIN' });
});

/* GET veiculos page. */
router.get('/veiculos', function (req, res, next) {
  res.render('veiculos', { title: 'Plataforma Web - ADMIN' });
});

module.exports = router;