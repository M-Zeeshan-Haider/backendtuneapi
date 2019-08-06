
const db = require('../config/db.config');
const jwt = require('jsonwebtoken');
const SECRET_KEY = require('../config/secretkey');

// Controllers For Admin

module.exports.login = (req, res) => {
    
    const userData = {
        username: req.body.userName,
        userpassword: req.body.userPassword,
        id: req.body.userId
    }
    token = jwt.sign(
        {
            role: 'admin'
        },
        SECRET_KEY.SECRET_KEY,
        {
            algorithm: 'HS256',
            expiresIn: 10000
        }
    )
    db.execute(`SELECT * FROM heroku_cd5497db7ba8561.admin WHERE userPassword = "${userData.userpassword}" AND userId = "${userData.id}"` ).then((data) => {
        if(data[0].length > 0){
            res.send({
                "message":'HURRAH', 
                status:true, 
                data: data[0] ,
                token: token
            });
        } else{
            res.send({
                "message":'invalid credentials', 
                status:false 
            });
        }
        
    }).catch((err) => {
        console.log(err);
    });
}


module.exports.signup = (req, res) => {

    const userData = {
        username: req.body.userName,
        useremail: req.body.userEmail,
        userpassword: req.body.userPassword,
        id: req.body.userId
    }

    db.execute(`INSERT INTO heroku_cd5497db7ba8561.admin (userName,userPassword,userEmail,userId) VALUES ("${userData.username}","${userData.userpassword}","${userData.useremail}","${userData.id}");` ).then((data) => {
        console.log(data);
        
        if(data){
            res.send({
                "message":'Successfully!', 
                status:true, 
            });
        } else{
            res.send({
                "message":'invalid credentials', 
                status:false 
            });
        }
        
    }).catch((err) => {
        console.log(err);
    });
}

