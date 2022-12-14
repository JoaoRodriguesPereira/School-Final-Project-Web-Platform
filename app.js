var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var profileRouter = require('./routes/profile');
var viagemRouter = require('./routes/viagem');
var adminRouter = require('./routes/admin');
var viagensUtilizadorRouter = require('./routes/viagensUtilizador');
var viagensUtilizadorLocaisRouter = require('./routes/viagensUtilizadorLocais');
var encomendaRouter = require('./routes/encomenda');
var sobreRouter = require('./routes/sobre');
var ultimaLocalizacaoRouter = require('./routes/ultimaLocalizacao');
var utilizadoresRouter = require('./routes/utilizadores');
var veiculosRouter = require('./routes/veiculos');
var encomendasRouter = require('./routes/encomendas');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/viagem', viagemRouter);
app.use('/profile', profileRouter);
app.use('/admin', adminRouter);
app.use('/viagensUtilizador', viagensUtilizadorRouter);
app.use('/viagensUtilizadorLocais', viagensUtilizadorLocaisRouter);
app.use('/encomenda', encomendaRouter);
app.use('/', indexRouter);
app.use('/ultimaLocalizacao', ultimaLocalizacaoRouter);
app.use('/utilizadores', utilizadoresRouter);
app.use('/veiculos', veiculosRouter);
app.use('/encomendas', encomendasRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
