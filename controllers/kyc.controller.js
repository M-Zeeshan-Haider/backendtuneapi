const db = require('../config/db.config');

module.exports.createKyc = async (req, res) => {
    const kycData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        birthDate: req.body.birthDate,
        teleName: req.body.teleName,
        addressOne: req.body.addressOne,
        addressTwo: req.body.addressTwo,
        isKyc: req.body.isKyc,
        bioInfo: req.body.bioInfo,
        title: req.body.title,
        city: req.body.city,
        state: req.body.state,
        nationality: req.body.nationality,
        zipCode: req.body.zipCode,
        profileimage: req.body.profileimage,
        verificationimage: req.body.verificationimage,
        imageAddress: req.body.imageAddress,
        verificationType: req.body.verificationType,
        documentType: req.body.documentType
    }
    let userData = await db.execute("SELECT * FROM heroku_cd5497db7ba8561.kyc where email ='" + req.body.email + "';");
    if (userData[0].length > 0) {

        if (userData[0][0].isKyc === 0) {
            db.execute("UPDATE heroku_cd5497db7ba8561.kyc SET firstName= '" + kycData.firstName + "', lastName='" + kycData.lastName + "' ,isKyc=" + kycData.isKyc + " ,phoneNumber='" + kycData.phoneNumber + "', birthDate='" + kycData.birthDate + "', teleName='" + kycData.teleName + "',addressOne='" + kycData.addressOne + "',addressTwo='" + kycData.addressTwo + "', city='" + kycData.city + "', state='" + kycData.state + "',nationality='" + kycData.nationality + "', zipCode='" + kycData.zipCode + "', profileimage='" + kycData.profileimage + "',verificationimage='" + kycData.verificationimage + "',imageAddress='" + kycData.imageAddress + "', verificationType='" + kycData.verificationType + "', documentType='" + kycData.documentType + "', bioInfo='" + kycData.bioInfo + "', title='" + kycData.title + "'  WHERE email='" + req.body.email + "';").then((data) => {
                console.log('RESPONSE DATA:::');
                if (data) {
                    res.send({
                        "message": "successfully",
                        status: true,
                        profilestatus: true
                    })
                } else {
                    res.send({
                        "message": 'unsuccessful;',
                        status: false,
                        profilestatus: false
                    })
                }
            }).catch(err => {
                console.log(err);
            })
        } else {
            res.send({
                "message": 'Email already exist.',
                status: false
            });
        }
    } else {
        db.execute(`INSERT INTO heroku_cd5497db7ba8561.kyc (firstName, lastName, email,isKyc, phoneNumber, birthDate, teleName, addressOne, addressTwo, city, state, nationality, zipCode, profileimage, verificationimage, imageAddress, verificationType,documentType,bioInfo,title) VALUES ("${kycData.firstName}", "${kycData.lastName}", "${kycData.email}","${kycData.isKyc}", "${kycData.phoneNumber}", "${kycData.birthDate}", "${kycData.teleName}", "${kycData.addressOne}", "${kycData.addressTwo}", "${kycData.city}", "${kycData.state}", "${kycData.nationality}", "${kycData.zipCode}", "${kycData.profileimage}", "${kycData.verificationimage}", "${kycData.imageAddress}", "${kycData.verificationType}", "${kycData.documentType}", "${kycData.bioInfo}", "${kycData.title}" )`).then((data) => {
            console.log(data);
            if (data) {
                res.send({
                    "message": "successfully",
                    status: true
                })
            } else {
                res.send({
                    "message": 'unsuccessful;',
                    status: false
                })
            }
        }).catch(err => {
            console.log(err);
        })
    }
}


module.exports.getkyc = (req, res) => {
    let query = '';
    switch (req.body.type) {
        case 'user':
            query = "SELECT * FROM heroku_cd5497db7ba8561.kyc where email = '" + req.body.email + "';";
            getKycDetail(query, res);
            break;
        case 'admin':
            query = "SELECT * FROM heroku_cd5497db7ba8561.kyc;";
            getKycDetail(query, res);
            break;
        default:
            console.log('nothing to do');
            break;
    }

}

module.exports.verifykyc = (req, res) => {
    db.execute(`SELECT * FROM heroku_cd5497db7ba8561.kyc where email="${req.body.email}"`).then(
        data => {

            if (data[0][0].email != undefined) {
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
        data => {
            console.log(data)
            if (data) {
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
        data => {
            console.log(data[0][0])
            if (data[0][0]) {
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

function getKycDetail(query, res) {
    db.execute(query).then((data) => {
        console.log("TESING RECORD::", data)
        if (data[0].length > 0) {
            res.send({
                "message": 'Hurrah',
                status: true,
                data: data[0]
            });
        } else {
            res.send({
                "message": 'nothing to show here',
                status: false
            });
        }
    }).catch(err => {
        console.log(err);
    });
}