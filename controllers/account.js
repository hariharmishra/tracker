var services = require('../internal/services');

module.exports.login = function (req, res) {
		if(req.body.data.username == 'admin' && req.body.data.password == 'admin'){
			var r = {username : result.username, verified : true};
			res.send({data : r});
		}
		else{
			var r = {username : '', verified : false};
			res.send({data : r});
		}
}

module.exports.dashboard = function (req, res) {

}

module.exports.logout = function (req, res) {
	req.logout();
	res.redirect('/');
}

module.exports.candidate_step1 = function (req, res) {
	services.application.candidate_step1(req.body.data, function (err, result) {
		res.send({data : result});
	});
}

module.exports.candidate_step2 = function (req, res) {
	services.application.candidate_step2(req.body.data, function (err, result) {
		res.send({data : result});
	});
}

module.exports.tracker_map = function (req, res) {
	console.log(req.params.id);
	services.application.tracker_map(req.params.id, function (err, result) {
		return res.render('map',{data : result});
	});
}

module.exports.get_journey = function (req, res) {
	services.application.get_journey(function (err, result) {
		return res.send({data : result});
	});
}