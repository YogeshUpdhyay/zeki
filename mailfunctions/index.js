var nodemailer = require("nodemailer");
const functions = require("firebase-functions");

// nodemailer configuration
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: gmailEmail,
        pass: gmailPassword,
    },
});

// oncall method
exports.inquire = functions
    .region("asia-south1")
    .https.onCall(async (data, context) => {
        const email = data.emailId;
        const name = data.name;
        const text = data.text;

        console.log(email, name, text);

        const mailOptions = {
            from: '"Poki Studios Inquiry." <noreply@pokistudios.com>',
            to: "robinpatoliya@gmail.com",
            subject: `You have a new inquiry from ${name}`,
            text: `
            You have a new inquirey from ${name}, 
            email id: ${email},
            Inquiry
            ${text}
        `,
        };

        try {
            await mailTransport.sendMail(mailOptions);
            functions.logger.log("Inquiry mail sent succesfully");
            return { success: true, msg: "Mail sent Successfully" };
        } catch (error) {
            functions.logger.error(
                "There was a problem sending the inquiry mail"
            );
            return {
                success: false,
                msg: "There was a error sending the mail",
            };
        }
    });
