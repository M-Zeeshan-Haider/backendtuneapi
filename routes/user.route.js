const adminController = require('../controllers/admin.controller');
const tokenController = require('../controllers/token.controller');
const userController  = require('../controllers/user.controller');
const jwt             = require('../middleware/jwt-middleware');
const kycController   = require('../controllers/kyc.controller');
module.exports = (app) => {

    app.post('/login', adminController.login);

    app.post('/signup', adminController.signup);

    app.post('/userlogin', userController.login);
    app.post('/usersignup', userController.signup);
    // app.use(jwt.jwtHandler);
    // app.use(jwt.jwtHeaders);
    app.post('/createtoken', tokenController.createToken);

    app.post('/listtoken', tokenController.listToken);

    app.get('/getalltokens', tokenController.getAllTokens);

    app.get('/getlisttokens', tokenController.getListTokens);

    app.get('/gettokendata', tokenController.getTokenData);
    
    app.post('/inserttokendata', tokenController.insertToken);

    app.post('/removeToken', tokenController.removeLiveToken);

    app.get('/getdeploytokens', tokenController.getDeployTokens);

    app.post('/kycrequest', kycController.createKyc);

    app.get('/getkycreq', kycController.getkyc);
    app.post('/verifystatus',kycController.verifykyc);
    app.post('/updatekycstatus',kycController.updatekyc);
  
    app.post('/getapprovedkyc',kycController.getapprovedkyc);

}