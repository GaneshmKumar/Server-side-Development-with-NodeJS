/*
* @Author: GaNeShKuMaRm
* @Date:   2017-02-28 18:16:04
* @Last Modified by:   GaNeShKuMaRm
* @Last Modified time: 2017-04-01 11:00:46
*/

'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var authenticate = require('./authenticate');
var cookieParser = require('cookie-parser');
var path = require('path');
var passport = require('passport');
var hostname = 'localhost';
var port  = 3000;

var  app = express();
/*
app.all('*', function(req, res, next) {
    if(req.secure) {
        return next();
    }
    res.redirect('https://' + req.hostname + ':' + app.get('secPort') + req.url);
});
*/
app.get('/', function(req, res, next) {
    res.end('Hi There');

});
var config = require('./config');
mongoose.connect(config.mongoUrl);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection-error'));
db.once('open', function() {
    console.log("Connected to mongodb server");
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

var userRouter = require('./routes/users');
var dishRouter = require('./routes/dishRouter');
var leadershipRouter = require('./routes/leadershipRouter');
var promotionRouter = require('./routes/promotionRouter');
var favoritesRouter = require('./routes/favoritesRouter');

app.use(passport.initialize());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', userRouter);
app.use('/dishes', dishRouter);
app.use('/leadership', leadershipRouter);
app.use('/promotions', promotionRouter);
app.use('/favorites', favoritesRouter);

app.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}`);
});

/*if(app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json('error', {
            message: err.message,
            error: err
        });
    });
}

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});
*/
module.exports = app;