/*
* @Author: GaNeShKuMaRm
* @Date:   2017-03-11 16:51:48
* @Last Modified by:   GaNeShKuMaRm
* @Last Modified time: 2017-03-11 17:24:08
*/

'use strict';

var mongoose = require('mongoose');
var assert = require('assert');

var Dishes = require("./models/dishes-3");

var url = 'mongodb://localhost:27017/conFusion';

mongoose.connect(url);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");
    // create a new dish
    Dishes.create({
        name: 'Uthapizza',
        description: 'Test',
        comments: [
            {
                rating: 3,
                comment: 'This is insane',
                author: 'Matt Daemon'
            }
        ]
    }, function (err, dish) {
        if (err) throw err;
        console.log('Dish created!');
        console.log(dish);

        var id = dish._id;

        // get all the dishes
        setTimeout(function () {
            Dishes.findByIdAndUpdate(id, {
                    $set: {
                        description: 'Updated Test'
                    }
                }, {
                    new: true
                })
                .exec(function (err, dish) {
                    if (err) throw err;
                    console.log('Updated Dish!');
                    console.log(dish);
                    dish.comments.push({
                        rating: 5,
                        comment: 'I\'m getting sinking feeling!',
                        author: 'Leonardo'
                    });

                    dish.save(function(err, dish) {
                        console.log('Updated comments!');
                        console.log(dish);
                        db.collection('dishes').drop(function () {
                        db.close();
                        });
                    });
                });
        }, 3000);
    });
});