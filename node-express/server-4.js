/*
* @Author: GaNeShKuMaRm
* @Date:   2017-02-24 23:10:38
* @Last Modified by:   GaNeShKuMaRm
* @Last Modified time: 2017-02-25 19:40:46
*/

'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = "localhost";
var port = 3000;

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

var dishRouter = express.Router();
dishRouter.route('/')
.all(function(req, res, next) {
    res.writeHead(200,  {'Content-Type': 'text/plain'});
    next();
})
.get(function(req, res, next) {
    res.end('Will send all the dishes to you');
})
.post(function(req, res, next) {
    res.end('Will add the dish: ' + req.body.name + ' with detials: ' + req.body.description);
})
.delete(function(req, res, next) {
    res.end('Deleting dish: ' + req.params.dishId);
})

dishRouter .route('/:dishId')
.all(function(req, res, next) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    next();
})
.get(function(req, res, next) {
    res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
})
.put(function(req, res, next) {
    res.write('Updating the dishes ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete(function(req, res, next) {
    res.end('Deleting dish: ' + req.params.dishId);
});

app.use('/dishes', dishRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}`);
});