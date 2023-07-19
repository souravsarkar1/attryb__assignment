const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    

    const token = req.headers.authorization?.split(' ')[1];

    if (token) {
        try {
            const decode = jwt.verify(token, process.env.secret);
            req.body.userID = decode.userID;
            req.body.dealer_name = decode.name;
            req.body.dealer_email = decode.email;
            next();
        } catch (error) {
            return res.status(401).json({ msg: "Not Authorized" });
        }
    } else {
        return res.status(401).json({ msg: "Please login" });
    }
};

module.exports = { auth };
