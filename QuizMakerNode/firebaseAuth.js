const { firebase, admin } = require('./firebaseConfig');

module.exports = (req, res, next) => {
    const token = req.header.authorization;

    try {
        admin.auth().verifyIdToken(token)
            .then(function (decodedToken) {
                if (decodedToken.uid === user.uid) {
                    req.user = user.uid
                    return next()
                }
            }).catch(function (error) {
                res.status(401).send('you are not hackerman')
            });
    } catch (error) {
        res.status(401).send('no hackerman token provided')
    }
};
