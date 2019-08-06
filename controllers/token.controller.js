const db = require('../config/db.config');

module.exports.createToken = (req, res) => {

    const userData = {
        name: req.body.tokenName,
        symbol: req.body.tokenSymbol,
        category: req.body.category,
        decimal: req.body.decimals,
        ethAddress: req.body.ethAddress,
        soundCloud: req.body.soundCloud,
        description: req.body.tokenDescription,
        youtube: req.body.youtube,
        supply: req.body.totalSupply,
        website: req.body.website,
        author: req.body.tokenAuthor,
    }

    db.execute(`INSERT INTO heroku_cd5497db7ba8561.createtoken (tokenName, tokenSymbol, tokenAuthor, category, decimals, totalSupply, website, youtube, ethAddress, tokenDescription, soundCloud) VALUES ("${userData.name}","${userData.symbol}","${userData.author}","${userData.category}","${userData.decimal}","${userData.supply}","${userData.website}","${userData.youtube}","${userData.ethAddress}","${userData.description}","${userData.soundCloud}");` ).then((data) => {
        console.log(data);
        
        if(data){
            res.send({
                "message":'Successfully!', 
                status:true, 
            });
        } else{
            res.send({
                "message":'invalid Entries', 
                status:false 
            });
        }
        
    }).catch((err) => {
        console.log(err);
    });
}


module.exports.listToken = (req, res) => {

    const userData = {
        name: req.body.name,
        symbol: req.body.symbol,
        category: req.body.genre,
        decimal: req.body.decimals,
        ethAddress: req.body.ethAddress,
        soundCloud: req.body.soundCloud,
        description: req.body.description,
        youtube: req.body.youtube,
        supply: req.body.totalSupply,
        website: req.body.website,
        author: req.body.tokenAuthor
    }

    db.execute(`INSERT INTO heroku_cd5497db7ba8561.listtoken (name, symbol, decimals, ethAddress, description, genre, soundCloud, totalSupply, website, youtube) VALUES ("${userData.name}","${userData.symbol}","${userData.decimal}","${userData.ethAddress}","${userData.description}","${userData.category}","${userData.soundCloud}","${userData.supply}","${userData.website}","${userData.youtube}");` ).then((data) => {
        console.log(data);
        
        if(data){
            res.send({
                "message":'Successfully!', 
                status:true, 
            });
        } else{
            res.send({
                "message":'invalid Entries', 
                status:false 
            });
        }
        
    }).catch((err) => {
        console.log(err);
    });
}

module.exports.insertToken = (req, res) => {

    const tokenData = {
        fullName: req.body.tokenName,
        name: req.body.tokenSymbol,
        addr: req.body.tokenAddress,
        decimals: req.body.tokenDecimals
    }

    db.execute(`INSERT INTO heroku_cd5497db7ba8561.tokens (addr, name, fullName, decimals) VALUES ("${tokenData.addr}","${tokenData.name}","${tokenData.fullName}","${tokenData.decimals}");` ).then((data) => {
        console.log(data);
        
        if(data){
            db.execute(`DELETE FROM heroku_cd5497db7ba8561.listtoken WHERE ethAddress="${tokenData.addr}"`)
            res.send({
                "message":'Successfully!', 
                status:true, 
            });
        } else{
            res.send({
                "message":'invalid Entries', 
                status:false 
            });
        }
        
    }).catch((err) => {
        console.log(err);
    });
}

module.exports.getAllTokens = (req, res) => {

    db.execute(`SELECT * FROM heroku_cd5497db7ba8561.createtoken` ).then((data) => {
        if(data[0].length > 0){
            res.send({
                "message":'HURRAH', 
                status:true, 
                data: data[0] 
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



module.exports.getListTokens = (req, res) => {

    db.execute(`SELECT * FROM heroku_cd5497db7ba8561.listtoken` ).then((data) => {
        if(data[0].length > 0){
            res.send({
                "message":'HURRAH', 
                status:true, 
                data: data[0] 
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


module.exports.getTokenData = (req, res) => {

    db.execute(`SELECT * FROM heroku_cd5497db7ba8561.tokens` ).then((data) => {
        if(data[0].length > 0){
            res.send({
                "message":'HURRAH', 
                status:true, 
                data: data[0] 
            });
        } else{
            res.send({
                "message":'invalid Request', 
                status:false 
            });
        }
        
    }).catch((err) => {
        console.log(err);
    });
}

module.exports.removeLiveToken = (req, res) => {
    const tokenData = {
        name: req.body.fullName,
        symbol: req.body.name,
        decimal: req.body.decimals,
        ethAddress: req.body.addr,
    }
    db.execute(`INSERT INTO heroku_cd5497db7ba8561.listtoken (name, symbol, decimals, ethAddress) VALUES ("${tokenData.name}","${tokenData.symbol}","${tokenData.decimal}","${tokenData.ethAddress}");` ).then((data) => {
        if (data) {
            db.execute(`DELETE FROM heroku_cd5497db7ba8561.tokens WHERE addr="${tokenData.ethAddress}"`).then((data)=> {
                if(data) {
                    res.send(
                        {
                            message: 'successfully',
                            status: true
                        }
                    )
                }
                else {
                    res.send(
                        {
                            message: 'un successful',
                            status: false
                        }
                    )
                }
            }).catch(err => {
                res.send({
                    message: 'database error',
                    status: false,
                    error: err
                })
            })
        }
    })


}

module.exports.getDeployTokens = (req, res) => {
    const tokenData = {
        Name: req.body.tokenName,
        addr: req.body.ethAddress,
        sym: req.body.tokenSymbol,
        decimals: req.body.decimals
    }
    db.execute(`SELECT * FROM heroku_cd5497db7ba8561.deployedtokens`).then(
        data => {
            if(data[0].length > 0){
                res.send({
                    "message":'HURRAH', 
                    status:true, 
                    data: data[0] 
                });
            } else{
                res.send({
                    "message":'invalid credentials', 
                    status:false 
                });
            }
        }
    ).catch(
        err => {
            res.send(
                {
                    message: 'Error in server',
                    status: false,
                    data: null
                }
            )
        }
    )
}