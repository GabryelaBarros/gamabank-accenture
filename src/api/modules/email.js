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


class Email {
    constructor(from, to, subject, text) {
        this.from = from
        this.to = to
        this.subject = subject
        this.text = text
    }
    async run(){
        const mailSent = await transporter.sendMail({
            from: this.from,
            to:  this.to,
            subject:  this.subject,
            text: this.text
        });
        
        return mailSent
    }
}

module.exports = Email