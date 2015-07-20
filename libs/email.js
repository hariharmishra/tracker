var nodemailer = require('nodemailer');

module.exports.send_email = function(to, subject, message, cb)
{

var smtpTransport = nodemailer.createTransport("SMTP",{
    auth: {
        user: "info@tracker.com",
        pass: "xxJLU-qbJGoaYaKD2kwW6w"
    },
	host : 'smtp.mandrillapp.com',
	port : '587'
});

var mailOptions = {
    from: "Tracker <info@tracker.com>",
    to: to,
    subject: subject, 
    html: message
}

smtpTransport.sendMail(mailOptions, function(err, response){
    if(err){
        cb(err);
    }else{
        console.log("Message sent: " + response.message);
    }
});
}