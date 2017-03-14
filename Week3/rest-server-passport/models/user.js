/*
* @Author: GaNeShKuMaRm
* @Date:   2017-03-14 23:25:53
* @Last Modified by:   GaNeShKuMaRm
* @Last Modified time: 2017-03-14 23:27:43
*/

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    username: String,
    password: String,
    admin: {
        type: Boolean,
        default: false
    }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);