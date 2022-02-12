const jwt = require("jsonwebtoken")

module.exports.isAuthorized = function(req, res, next) {
    if (req.url != '/users/login') {
        if (!req.headers.cookie) {
            res.status(401).send('Unauthorised access');
            return;
        } else if (req.headers.cookie && req.url != '/users/logout') {
            const token = req.headers.cookie?.replace(process.env.TOKEN_KEY + '=', '');
            const tokenObj = jwt.verify(token, process.env.SHARED_KEY);
            if (!tokenObj) {
                res.status(401).send('Invalid token');
                return;
            }
        }
    }
    next();
}