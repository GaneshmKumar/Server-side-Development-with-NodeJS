/*
* @Author: GaNeShKuMaRm
* @Date:   2017-03-11 16:51:48
* @Last Modified by:   GaNeShKuMaRm
* @Last Modified time: 2017-03-11 17:06:03
*/

'use strict';

var mongoose = require('mongoose');
var assert = require('assert');

var Dishes = require("./models/dishes-1");

var url = 'mongodb://localhost:27017/conFusion';

mongoose.connect(url);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log('Connected Successfully to server');
    var newDish = Dishes({
        name: 'Uthapizza',
        description: 'Test'
    });

    newDish.save(function(err) {
        if(err) throw err;
        console.log('Dish Created');

        Dishes.find({}, function(err, dishes) {
            console.log(dishes);

        db.collection('dishes').drop(function() {
                db.close();
            })
        })
    });
});


