/*
* @Author: GaNeShKuMaRm
* @Date:   2017-03-11 16:48:09
* @Last Modified by:   GaNeShKuMaRm
* @Last Modified time: 2017-03-11 17:19:06
*/

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    rating:  {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment:  {
        type: String,
        required: true
    },
    author:  {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

//Dish Schema
var dishSchema = new Schema({
        name: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true
        },
        comments:[commentSchema]
    },
    {
        timestamps: true
});

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;
