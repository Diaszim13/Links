const { getMessage } = require("../helpers/messages");

const TYPE_JSON = 'application/json'
const STATUS_CODE_OK = 200;
const STATUS_CODE_BAD_REQUEST = 400;
const STATUS_CODE_UNAUTORIZED = 401;
const STATUS_CODE_NOT_FOUND = 404;
const STATUS_CODE_SERVER_ERROR = 500;



const jsonOK = function(data, message, metadata) {
    const status = STATUS_CODE_OK; 
    message = (message) ? message: getMessage('response.jsonOK');
    metadata = (metadata) ? metadata: {};
  

    this.status(status);
    this.type(TYPE_JSON);
    return this.json({message, data, metadata, status: status});
};

const jsonBadReq = function( data,message, metadata) {
    const status = STATUS_CODE_BAD_REQUEST; 

    message = (message) ? message:  getMessage('response.jsonBadReq');
    metadata = (metadata) ? metadata: {};
   

    this.status(status);
    this.type(TYPE_JSON);
    return this.json({message, data, metadata, status: status});
};

const jsonUntorized = function(data, message, metadata) {
    const status = STATUS_CODE_UNAUTORIZED;
    message = (message) ? message:  getMessage('response.jsonUntorized');
    metadata = (metadata) ? metadata: {};
   

    this.status(status);
    this.type(TYPE_JSON);
    return this.json({message, data, metadata, status: status});
};

const jsonNotFound = function(data, message, metadata) {
    const status = STATUS_CODE_NOT_FOUND;
    message = (message) ? message: getMessage('response.jsonNotFound');
    metadata = (metadata) ? metadata: {};
   

    this.status(status);
    this.type(TYPE_JSON);
    return this.json({message, data, metadata, status: status});
};

const jsonServerError = function(data, message, metadata) {
    const status = STATUS_CODE_SERVER_ERROR;
    message = (message) ? message: getMessage('response.jsonServerError');
    metadata = (metadata) ? metadata: {};
   

    this.status(status);
    this.type(TYPE_JSON);
    return this.json({message, data, metadata, status: status});
};




const response = (req,res,next) => {

    res.jsonOK = jsonOK;
    res.jsonBadReq = jsonBadReq;
    res.jsonUntorized = jsonUntorized;
    res.jsonNotFound = jsonNotFound;
    res.jsonServerError = jsonServerError;

    next();
}

module.exports = response;