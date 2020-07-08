require("firebase/auth");
const firebase = require('firebase')
const admin = require('firebase-admin')
const config = require('../config');

firebase.initializeApp(config.firebase);

admin.initializeApp();

const getAuthToken = (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
        req.authToken = req.headers.authorization.split(' ')[1];
    } else {
        req.authToken = null;
    }
    next();
};

module.exports = (req, res, next) => {
    getAuthToken(req, res, async () => {
        try {
            const { authToken } = req;
            const userInfo = await admin.auth().verifyIdToken(authToken);
            req.authId = userInfo.uid;
            return next();
        } catch (e) {
            return res.status(401).send({ error: 'Unauthorized Request' });
        }
    });
};

