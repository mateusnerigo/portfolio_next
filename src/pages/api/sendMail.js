const nodemailer = require('nodemailer');


export default async function sendMail(req, res) {
  console.log(process.env.USERMAIL);

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '465',
    auth: {
      user: process.env.USERMAIL,
      pass: process.env.USERPASSWORD
    }
  });

  await transporter.sendMail({
    from: `${req.body.name} < ${req.body.email} >`,
    to: process.env.USERMAIL,
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
