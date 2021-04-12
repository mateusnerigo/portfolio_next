const nodemailer = require('nodemailer');

const config = require('../../../config');

export default async function sendMail(req, res) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '465',
    auth: {
      user: config.USERMAIL,
      pass: config.USERPASSWORD
    }
  });

  await transporter.sendMail({
    from: `${req.body.name} < ${req.body.email} >`,
    to: config.USERMAIL,
    replyTo: req.body.email,
    subject: "Contato pelo site | Portfolio",
    text: req.body.message,
    html: `<h4>Nova mensagem recebida de ${req.body.name}!</h4><p>${req.body.message}</p>`,
  }).then((response) => {
    res.send(response)
  }).catch((err) => {
    res.send(err)
  })
};
