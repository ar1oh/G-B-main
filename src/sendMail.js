var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
let transporter = nodemailer.createTransport({
    host: "smtp.mail.ru", //replace with your email provider
    port: 465,
    auth: {
      user: "gandbclothes@mail.ru", //replace with the email address
      pass: "BGhWjaRvHM4GBw2Ry7A6" //replace with the password
    }
});

// verify connection configuration
transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
});

router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${message} `
    var mail = {
      from: name,
      to: "gandbclothes@mail.ru",
      text: content
    }
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
      }
    })
})