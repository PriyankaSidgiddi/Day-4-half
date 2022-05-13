var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var detailsRouter = require('./routes/details');

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require("./connection/mongoose");

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/details', detailsRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// app.get('/details', function(req,res){
//   res.render('./views/details.jade')
// }) 

// app.post("/details", async (req, res, next) => {
//   const food = new detailModel(req.body);

//   try {
//     await detail.save();
//     res.send(detail);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

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
