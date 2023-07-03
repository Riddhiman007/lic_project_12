const { createTransport } = require('nodemailer');
const fire = require('fire');

const provider = createTransport("smtp://rudranarayanchoudhary311@gmail.com:ewosgvagqxiangpd@smtp.gmail.com:587")

/**
 * 
 * @returns a random 6-digit OTP
 */
function createOTP() {
    return Math.floor(Math.random() * (999999 - 100000) + 100000)
}


function sendOTP(email) {
    const otp = createOTP()
    const mail = provider.sendMail({ to: email, text: "Your otp is: " + otp })
    return mail
}

