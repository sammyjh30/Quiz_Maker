require("firebase/auth");
var fs = require('fs');

const firebase = require('firebase')
const admin = require('firebase-admin')

const firebaseConfig = JSON.parse(fs.readFileSync('./firebasesettings.json'));

firebase.initializeApp(firebaseConfig);

admin.initializeApp();

module.exports = { firebase, admin };