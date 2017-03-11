/*
* @Author: GaNeShKuMaRm
* @Date:   2017-03-11 21:26:34
* @Last Modified by:   GaNeShKuMaRm
* @Last Modified time: 2017-03-11 21:34:19
*/

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var leadershipSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    abbr: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

var Leaders = mongoose.model('Leader', leadershipSchema);
module.exports = Leaders;