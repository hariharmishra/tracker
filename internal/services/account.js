var db = require('../database/models');
var util = require('../../libs/util');
var email = require('../../libs/email');

function send_verification_email(to, link, cb) {

var subject = "Welcome To Tracker System";
var message = 'Your tracker link is'+link;
				
email.send_email(to, subject, message, function(err){
if(err){
	console.log(err);
}
});
}

module.exports.login = function (data, cb) {

	db.Account.findOne({username : data.username, password : data.password}, function(err, account){
		if(err){
			console.log(err);
			return cb(err, null);
		}
		else if(account == null){
			return cb(null, null);
		}
		else{
			return cb(null, account);
		}

	})
}