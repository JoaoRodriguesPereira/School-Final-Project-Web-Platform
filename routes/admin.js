var express = require('express');
var router = express.Router();

/* GET admin page. */
router.get('/', function (req, res, next) {
  res.render('admin', { title: 'Plataforma Web - ADMIN' });
});

/* GET viagem page. */
router.get('/viagensUtilizador/:email', function(req, res, next) {
  res.render('viagensUtilizador', { emailRecebido: req.params.email,  title: 'Plataforma Web - ADMIN'});
});

module.exports = router;