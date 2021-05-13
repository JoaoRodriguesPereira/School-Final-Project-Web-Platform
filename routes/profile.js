var express = require('express');
var router = express.Router();

/* GET profile page. */
router.get('/', function (req, res, next) {
  res.render('profile', { title: 'Plataforma Web' });
});

/* GET viagem page. */
router.get('/viagem/:key', function (req, res, next) {
  res.render('viagem', { viagem_id: req.params.key, title: 'Plataforma Web' });
});

module.exports = router;