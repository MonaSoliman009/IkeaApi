const nodemailer = require('nodemailer');
const htmlToText = require('html-to-text');


module.exports=class Email{

    constructor(user,url){
        this.to=user.email
        this.from=`IKEA <${process.env.EMAIL_FROM}>`
        this.firstName=user.name.split(' ')[0]
        this.url=url
    }

newTransport(){

    if (process.env.NODE_ENV === 'production') {
        // Sendgrid
        return nodemailer.createTransport({
          service: 'SendGrid',
          auth: {
            user: process.env.SENDGRID_USERNAME,
            pass: process.env.SENDGRID_PASSWORD
          }
        });
      }
    return nodemailer.createTransport({
        host:process.env.EMAIL_HOST,
        port:process.env.EMAIL_PORT,
        auth:{
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    })
}

async send(html, subject){
    const mailOptions = {
        from: this.from,
        to: this.to,
        subject,
        html,
        text: htmlToText.convert(html)
      };

    await this.newTransport().sendMail(mailOptions);

}

 async sendWelcome() {
    await this.send(`<html>
    <head></head>
    <body>
    <h1>Hello</h1>
    </body>
    </html>`, 'Welcome to the Natours Family!');
  }

  
  async sendPasswordReset() {
    await this.send(
        `<html>
        <head></head>
        <body>
        <h1>passwordReset</h1>
        </body>
        </html>`,
      'Your password reset token (valid for only 10 minutes)'
    );
  }


}