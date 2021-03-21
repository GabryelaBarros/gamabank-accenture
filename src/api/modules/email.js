const nodemailer = require('nodemailer')
const SMTP_CONFIG = require('../../configs/smtp')

let transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass
    },
    tls: {
        rejectUnauthorized: false
    }
})

let mailOptions = {
    from: "Entregador",
    to: ["developsgamabank@gmail.com"],
    subject: "Enviado com Sucesso",
    text: "Ola"
}

async function run(){
    const mailSent = await transporter.sendMail(mailOptions);
    return mailSent
}

module.exports = {run}