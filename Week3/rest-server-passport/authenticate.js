/*
* @Author: GaNeShKuMaRm
* @Date:   2017-03-20 18:29:14
* @Last Modified by:   GaNeShKuMaRm
* @Last Modified time: 2017-03-20 18:34:46
*/

'use strict';

var passport = require('passport');
var LocalStategy = require('passport-local').Strategy;
var config = require('./config');
var User = require('./models/User');

exports.local = passport.use(new LocalStategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
