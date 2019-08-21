const verifyJWTToken = require('../libs/auth').verifyToken;

const access_routes = ["/login_check", "/user", "/mail/send", "/security/register", ""]

const verifyToken = (req, res, next) => {
    if(access_routes.indexOf(req.path) > -1) {
        next();
    } else {
        const auth = req.get('Authorization');
        if(!auth || !auth.startsWith('Bearer ')) {
            res.sendStatus(401);
        }
        verifyJWTToken(auth.replace("Bearer ", ""))
        .then((decodedToken) => {
            req.user = decodedToken;
            next();
        })
        .catch((error) => res.status(400).send({
            error: "JWT TOKEN invalid",
            details: error
        }));
    }
}

module.exports = {
    verifyToken
}