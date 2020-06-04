var express = require('express');
var router = express.Router();

/* GET viagem page. */
router.get('/', function (req, res, next) {
  res.render('viagensUtilizador', { title: 'Plataforma Web' });
});

/* GET profile page. */
router.get('/viagensUtilizadorLocais/:email&:key', function(req, res, next) {
  res.render('viagensUtilizadorLocais', { viagem_id: req.params.key, email: req.params.email, title: 'Plataforma Web'});
});

module.exports = router;