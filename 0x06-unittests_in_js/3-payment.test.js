const sendPaymentRequestToApi = require('./3-payment');
const utils = require('./utils');
const sinon = require('sinon');

const utilsObj = new utils();

describe('Test payment', function() {
    it('it spy the calculateNumber method', function() {
        let spy = sinon.spy(utilsObj, 'calculateNumber');
        let arg1 = 10, arg2 = 30;
        sendPaymentRequestToApi.calculateNumber(arg1, arg2)
        // utilsObj.calculateNumber(arg1, arg2);
        sinon.assert.calledWith(spy, "SUM", arg1, arg2);
        spy.restore();
    });
});
