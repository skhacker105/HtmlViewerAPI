module.exports.isAuthorized = function(req, res, next) {
    console.log('req.cookie = ', req.cookie);
    if (req.url != '/users/login' && req.url != '/users/logout' && req.method != 'OPTIONS' && !req.headers.authorization) {
        res.status(401).send('Unauthorised access');
        return;
    }
    next();
}