const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const utilsObj = new Utils();
    const total = utilsObj.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${total}`);
    return total;
}

module.exports = sendPaymentRequestToApi;
