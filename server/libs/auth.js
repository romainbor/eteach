const jwt = require('jsonwebtoken');
const JWT_SECRET = "MaBelleJonquille";

const createToken = function (user = {}) {
	return jwt.sign({
		payload: {
			userName: user.user_name
		}
	}, JWT_SECRET, {
		expiresIn: "7d",
		algorithm: "HS256"
	});
};

const verifyToken =  function (token) {
	return new Promise((resolve, reject) => jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
		if(err || !decodedToken) {
			reject(err);
		}

		resolve(decodedToken);
	}));
};

//fonction pour hasher le password rentré

module.exports = {
	createToken,
	verifyToken
}