/*
* @Author: GaNeShKuMaRm
* @Date:   2017-04-01 10:46:06
* @Last Modified by:   GaNeShKuMaRm
* @Last Modified time: 2017-04-01 10:46:13
*/

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var favoriteSchema = new Schema({
    postedBy: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    dishes: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Dish' } ]
},
{
    timestamps : true
}
);

var Favorites = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorites;