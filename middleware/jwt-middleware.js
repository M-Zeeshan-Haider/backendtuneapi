const jwt = require('jsonwebtoken');
const SECRET_KEY = require('../config/secretkey');
module.exports = {
    jwtHandler: function(req, res, next) {
        let token = req.get('token');
        jwt.verify(token, SECRET_KEY.SECRET_KEY, function(err,decoded) {
            if(err) {
                console.log('error')
                res.set('token',null)
                res.json({
                    message: null,
                    status: null,
                    data: null
                });
            }
            else {
                next();
            }
        })
    },
    jwtHeaders: function(req, res, next) {
        res.set('token',req.get('token'))
        next();
    }
}
