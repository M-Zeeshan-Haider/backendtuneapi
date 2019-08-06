const db = require('../config/db.config');

module.exports.createKyc = (req, res) => {

    const kycData = {
        firstName: req.body.firstName ,
        lastName: req.body.lastName ,
        email: req.body.email ,
        phoneNumber: req.body.phoneNumber ,
        birthDate: req.body.birthDate ,
        teleName: req.body.teleName ,
        addressOne: req.body.addressOne ,
        addressTwo: req.body.addressTwo ,
        city: req.body.city ,
        state: req.body.state ,
        nationality: req.body.nationality ,
        zipCode: req.body.zipCode ,
        walletType: req.body.walletType ,
        walletAddress: req.body.walletAddress ,
        imageAddress: req.body.imageAddress ,
        verificationType: req.body.verificationType
    }

    db.execute(`INSERT INTO heroku_cd5497db7ba8561.kyc (firstName, lastName, email, phoneNumber, birthDate, teleName, addressOne, addressTwo, city, state, nationality, zipCode, walletType, walletAddress, imageAddress, verificationType) VALUES ("${kycData.firstName}", "${kycData.lastName}", "${kycData.email}", "${kycData.phoneNumber}", "${kycData.birthDate}", "${kycData.teleName}", "${kycData.addressOne}", "${kycData.addressTwo}", "${kycData.city}", "${kycData.state}", "${kycData.nationality}", "${kycData.zipCode}", "${kycData.walletType}", "${kycData.walletAddress}", "${kycData.imageAddress}", "${kycData.verificationType}" )`).then((data) => {
        console.log(data);
        if (data) {
            res.send({
                "message": "successfully",
                status: true
            })
        } else {
            res.send({
                "message": 'unsuccessfu;',
                status: false
            })
        }
    }).catch(err => {
        console.log(err);
    })
}


module.exports.getkyc = (req, res) => {
    db.execute(`SELECT * FROM heroku_cd5497db7ba8561.kyc`).then(
        (data) => {
            if(data[0].length > 0) {
                res.send({
                    "message": 'Hurrah',
                    status: true,
                    data: data[0]
                })
            } else {
                res.send({
                    "message": 'nothing to show here',
                    status: false
                })
            }
        }
    ).catch(err => {
        console.log(err);
    })
}

module.exports.verifykyc = (req, res) => {
    db.execute(`SELECT * FROM heroku_cd5497db7ba8561.kyc where email="${req.body.email}"`).then(
        data=> {
           
            if(data[0][0].email!=undefined) {
                res.send({
                    message: 'found',
                    status: true,
                    data: data[0]
                })
            } else {
                res.send({
                    "message": 'nothing to show here',
                    status: false
                })
            }
        }
    ).catch(err => {
        console.log(err);
    })
}

module.exports.updatekyc = (req, res) => {
    db.execute(`UPDATE heroku_cd5497db7ba8561.kyc SET status="1" WHERE idkyc="${req.body.id}"`).then(
        data=> {
           console.log(data)
            if(data) {
                res.send({
                    message: 'found',
                    status: true,
                    data: data[0]
                })
            } else {
                res.send({
                    "message": 'nothing to show here',
                    status: false
                })
            }
        }
    ).catch(err => {
        console.log(err);
    })
}

module.exports.getapprovedkyc = (req, res) => {
    console.log(req.body.email)
    db.execute(`SELECT * FROM heroku_cd5497db7ba8561.kyc where email="${req.body.email}"`).then(
        data=> {
           console.log(data[0][0])
            if(data[0][0]) {
                res.send({
                    message: 'found',
                    status: true,
                    data: data[0]
                })
            } else {
                res.send({
                    "message": 'nothing to show here',
                    status: false
                })
            }
        }
    ).catch(err => {
        console.log(err);
    })
}

