var express = require('express');
var router = express.Router();

/* GET profile page. */
router.get('/', function (req, res, next) {
  res.render('viagemUtilizadorLocais', { title: 'Plataforma Web' });
});


module.exports = router;