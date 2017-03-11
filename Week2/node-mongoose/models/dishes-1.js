/*
* @Author: GaNeShKuMaRm
* @Date:   2017-03-11 16:48:09
* @Last Modified by:   GaNeShKuMaRm
* @Last Modified time: 2017-03-11 17:01:46
*/

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
        }
    },
    {
        timestamps: true
});

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;
