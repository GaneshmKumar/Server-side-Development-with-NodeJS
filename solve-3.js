/*
* @Author: GaNeShKuMaRm
* @Date:   2017-02-24 20:38:09
* @Last Modified by:   GaNeShKuMaRm
* @Last Modified time: 2017-02-24 20:46:36
*/

'use strict';

var argv = require('yargs')
            .usage('Usage: node $0 --l=[num] --b=[num')
            .demand(['l', 'b'])
            .argv;
var rect = require('./rectangle-2');

function solveRect(l, b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);
    rect(l, b, function(err, rectangle) {
        if(err) {
            console.log(err);
        }
        else {
            console.log("The area of the rectangle with dimensions length = " + l + " and breadth = " + b + " is " + rectangle.area());
            console.log("The perimeter of the rectangle with dimensions length = " + l + " and breadth = " + b + " is " + rectangle.perimeter());
        }
    });
};

solveRect(argv.l, argv.b);
