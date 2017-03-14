/*
* @Author: GaNeShKuMaRm
* @Date:   2017-02-28 18:13:32
* @Last Modified by:   GaNeShKuMaRm
* @Last Modified time: 2017-03-15 00:11:52
*/

'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var Verify = require('./verify');
var leadershipRouter = express.Router();

var leadershipRouter = express.Router();
leadershipRouter.route('/')
.all(function(req, res, next) {
    res.writeHead(200,  {'Content-Type': 'text/plain'});
    next();
})
.get(function(req, res, next) {
    res.end('Will send all the leaders to you');
})
.post(Verify.verifyOrdinaryUser, Verify.verifyAdmin,function(req, res, next) {
    res.end('Will add the leader: ' + req.body.name + ' with detials: ' + req.body.description);
})
.delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin,function(req, res, next) {
    res.end('Deleting leader: ' + req.params.leaderId);
})

leadershipRouter .route('/:leaderId')
.all(function(req, res, next) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    next();
})
.get(Verify.verifyOrdinaryUser, Verify.verifyAdmin,function(req, res, next) {
    res.end('Will send details of the leader: ' + req.params.leaderId + ' to you!');
})
.put(Verify.verifyOrdinaryUser, Verify.verifyAdmin,function(req, res, next) {
    res.write('Updating the leaders ' + req.params.leaderId + '\n');
    res.end('Will update the leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin,function(req, res, next) {
    res.end('Deleting leader: ' + req.params.leaderId);
});

module.exports = leadershipRouter;