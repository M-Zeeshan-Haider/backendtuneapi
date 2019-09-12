// Controller for Users
const db = require('../config/db.config');
const jwt = require('jsonwebtoken');
const SECRET_KEY = require('../config/secretkey');

module.exports.login = (req, res) => {

    const userData = {
        useremail: req.body.userEmail,
        userpassword: req.body.userPassword
    }
    token = jwt.sign({
            role: 'user'
        },
        SECRET_KEY.SECRET_KEY, {
            algorithm: 'HS256',
            expiresIn: 10000
        }
    )
    db.execute(`SELECT * FROM heroku_cd5497db7ba8561.users WHERE userPassword = "${userData.userpassword}" AND userEmail = "${userData.useremail}"`).then((data) => {
        if (data[0].length > 0) {
            res.send({
                "message": 'Success',
                status: true,
                data: data[0],
                token: token
            });
        } else {
            res.send({
                "message": 'invalid credentials',
                status: false
            });
        }

    }).catch((err) => {
        console.log(err);
    });
}


module.exports.signup = async (req, res) => {
    let userfind = await db.execute("SELECT * FROM heroku_cd5497db7ba8561.users where userEmail ='" + req.body.userEmail + "';");
    if (userfind[0].length>0) {
        res.send({
            "message": 'User already exist.',
            status: false
        });
    } else {
        const userData = {
            username: req.body.userName,
            useremail: req.body.userEmail,
            userpassword: req.body.userPassword
        }

        db.execute(`INSERT INTO heroku_cd5497db7ba8561.users (userName,userPassword,userEmail) VALUES ("${userData.username}","${userData.userpassword}","${userData.useremail}");`).then((data) => {
            console.log(data);

            if (data) {
                res.send({
                    "message": 'Successfully!',
                    status: true,
                });
            } else {
                res.send({
                    "message": 'invalid credentials',
                    status: false
                });
            }

        }).catch((err) => {
            console.log(err);
        });
    }
}