/*
* @Author: GaNeShKuMaRm
* @Date:   2017-02-28 18:16:04
* @Last Modified by:   GaNeShKuMaRm
* @Last Modified time: 2017-03-14 23:19:22
*/

'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var hostname = 'localhost';
var port  = 3000;

var  app = express();

mongoose.connect("mongodb://localhost:27017/conFusion");

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection-error'));
db.once('open', function() {
    console.log("Connected to mongodb server");
});

app.use(morgan('dev'));
app.use(bodyParser.json());

var dishRouter = require('./routes/dishRouter');
var leadershipRouter = require('./routes/leadershipRouter');
var promotionRouter = require('./routes/promotionRouter');

app.use('/dishes', dishRouter);
app.use('/leadership', leadershipRouter);
app.use('/promotions', promotionRouter);

app.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;