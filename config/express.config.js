/******************************************************
 *************+ Dependencies *************** 
 ******************************************************/

const cors = require('cors'); 
const bodyParser = require('body-parser'); 
const fs = require('fs');   
// const express = require('express'); //? --** Use if necessary **--    
const corsOptions = {
    exposedHeaders: ['token']
}

//  EXPOSTS
module.exports = (app) => {

    // Enabling Cors
    app.use(cors(corsOptions));

    // Pars application/JSON
    app.use(bodyParser.json({limit: '50mb'}));

    // Pars application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

    // Setting Path to Route Folder
    var routPath = './routes/';
    fs.readdirSync(routPath).forEach((file) => {
        var route = routPath + file;
        require('../'+route)(app);
    })

}