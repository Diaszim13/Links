const getMessage = require('./messages');

const getValidatorError = (error, messagePath) => {
    if(!error){
        return null;
    }

    const errorMessage = {};
    error.details.map((detail) => { 
    const message = error.details[0].message;
    const type = error.details[0].type;
    const key = error.details[0].context.key;

    const path = `${messagePath}.${key}.${type}`;
    const customMessage = getMessage(path);
    if(!customMessage) {
        console.log('customMessage not found');
    }
    errorMessage[key] = getMessage(path)|| message;
});
    return errorMessage;
} 

module.exports = {getValidatorError, getMessage};