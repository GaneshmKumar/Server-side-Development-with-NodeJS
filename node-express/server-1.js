/*
* @Author: GaNeShKuMaRm
* @Date:   2017-02-24 21:10:27
* @Last Modified by:   GaNeShKuMaRm
* @Last Modified time: 2017-02-24 22:29:50
*/

'use strict';

var express = require('express');
var http = require('http');

var hostname = "localhost";
var port = 3000;

var app = express();

app.use(function(req, res, next) {
    console.log(req.headers);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello World</h1>');
});

var server = http.createServer(app);

server.listen(port, function() {
    console.log(`Server running at http://${hostname}:${port}`);
});