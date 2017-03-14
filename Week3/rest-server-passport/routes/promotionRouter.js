/*
* @Author: GaNeShKuMaRm
* @Date:   2017-02-28 18:15:05
* @Last Modified by:   GaNeShKuMaRm
* @Last Modified time: 2017-03-15 00:11:55
*/

'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var Verify = require('./verify');
var promotionRouter = express.Router();

var promotionRouter = express.Router();
promotionRouter.route('/')
.all(function(req, res, next) {
    res.writeHead(200,  {'Content-Type': 'text/plain'});
    next();
})
.get(function(req, res, next) {
    res.end('Will send all the promotions to you');
})
.post(Verify.verifyOrdinaryUser, Verify.verifyAdmin,function(req, res, next) {
    res.end('Will add the promotion: ' + req.body.name + ' with detials: ' + req.body.description);
})
.delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin,function(req, res, next) {
    res.end('Deleting promotion: ' + req.params.promotionId);
})

promotionRouter.route('/:promotionId')
.all(function(req, res, next) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    next();
})
.get(Verify.verifyOrdinaryUser, Verify.verifyAdmin,function(req, res, next) {
    res.end('Will send details of the promotion: ' + req.params.promotionId + ' to you!');
})
.put(Verify.verifyOrdinaryUser, Verify.verifyAdmin,function(req, res, next) {
    res.write('Updating the promotions ' + req.params.promotionId + '\n');
    res.end('Will update the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin,function(req, res, next) {
    res.end('Deleting promotion: ' + req.params.promotionId);
});

module.exports = promotionRouter;