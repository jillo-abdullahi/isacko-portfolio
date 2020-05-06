const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

// Use gmail to set up transporter
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: functions.config().mail.user,
        pass: functions.config().mail.pass
    }
});

exports.sendMail = functions.https.onCall((data) => {


        const info = data.details
        // getting destination email by query string
        const dest = functions.config().mail.dest

        const mailOptions = {
            from: `${info.name + " "} <${info.email}>`,
            to: dest,
            subject: 'Portfolio Message Alert',
            html: `<p style="font-size: 16px;">${info.name + " "}, ${info.email}</p>
                    <p
                    style="
                        font-size: 1rem;
                        background: #FFECB3;
                        padding: 10px;
                        border-radius: 10px 0 0 0;">${info.message}</p>
                ` // email content in HTML
        };

        // returning results
        return transporter.sendMail(mailOptions, (err, info) => {
            if(err){
                console.log("failed", err);
            }
        })

});