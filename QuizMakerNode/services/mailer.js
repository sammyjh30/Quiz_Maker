const nodemailer = require('nodemailer');

const config = require('../config');

let transport = nodemailer.createTransport(config.smtp);

// example email
const testMessage = {
    from: 'elonmusk@tesla.com', // Sender address
    to: 'kevinjulius97@gmail.com',         // List of recipients
    subject: 'Design Your Model S | Tesla', // Subject line
    text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
};

module.exports = {
    transport, testMessage
}
