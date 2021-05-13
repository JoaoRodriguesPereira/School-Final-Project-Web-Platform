var express = require('express');
var router = express.Router();

/* GET profile page. */
router.get('/:email', function (req, res, next) {
  res.render('ultimaLocalizacao', { email: req.params.email, title: 'Plataforma Web' });
});

module.exports = router;