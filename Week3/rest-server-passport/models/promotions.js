/*
* @Author: GaNeShKuMaRm
* @Date:   2017-03-11 21:22:13
* @Last Modified by:   GaNeShKuMaRm
* @Last Modified time: 2017-03-11 21:30:02
*/

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var promotionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    price: {
        type: Currency,
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

var Promotions = mongoose.model('Promotion', promotionSchema);
module.exports = Promotions;