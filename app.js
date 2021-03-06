var express 		      = require('express');
var path 			        = require('path');
var favicon 	       	= require('serve-favicon');
var logger 			      = require('morgan');
var cookieParser 	    = require('cookie-parser');
var bodyParser 		    = require('body-parser');
var validator         = require('express-validator');
var mongoose 		      = require('mongoose');

var index 					        = require('./routes/index');
var users 				        	= require('./routes/users');
var categoriaDoramaRoute 	  = require('./routes/categoria-dorama');
var categoriaPersonajeRoute = require('./routes/categoria-personaje');
var actorRoute				      = require('./routes/actor');
var doramaRoute 			      = require('./routes/dorama');
var personajeRoute 			    = require('./routes/personaje');
var otrasConsultasRoute		  = require('./routes/otras-consultas');

var app = express();

// Conexión a la base de datos (MongoLab)
mongoose.connect('mongodb://kevin:123456@ds137040.mlab.com:37040/doramatimeversionb', function(err){
    if(err){
        console.log(err);
    } else {
        console.log('Conectado a la base de datos.');
    }
});
 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/categoria-dorama', categoriaDoramaRoute);
app.use('/categoria-personaje', categoriaPersonajeRoute);
app.use('/actor', actorRoute);
app.use('/dorama', doramaRoute);
app.use('/personaje', personajeRoute);
app.use('/api', otrasConsultasRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {title:'Página No Disponible'});
});

module.exports = app;

