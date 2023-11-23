const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
    it('should spy the calculateNumber method', function () {
        const spy = sinon.spy(Utils.prototype, 'calculateNumber');
        const arg1 = 100,
            arg2 = 20;

        sendPaymentRequestToApi(arg1, arg2);

        sinon.assert.calledWith(spy, 'SUM', arg1, arg2);
        spy.restore();
    });
});
