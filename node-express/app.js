/*
* @Author: GaNeShKuMaRm
* @Date:   2017-02-28 18:16:04
* @Last Modified by:   GaNeShKuMaRm
* @Last Modified time: 2017-02-28 18:55:09
*/

'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port  = 3000;

var  app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

var dishRouter = require('./dishRouter');
var leadershipRouter = require('./leadershipRouter');
var promotionRouter = require('./promotionRouter');

app.use('/dishes', dishRouter);
app.use('/leadership', leadershipRouter);
app.use('/promotions', promotionRouter);

app.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}`);
});