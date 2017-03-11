/*
* @Author: GaNeShKuMaRm
* @Date:   2017-02-24 18:20:27
* @Last Modified by:   GaNeShKuMaRm
* @Last Modified time: 2017-02-24 18:26:48
*/

'use strict';
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

solveRect(2, 4);
solveRect(3, 5);
solveRect(-3, 5 );