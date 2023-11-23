const sinon = require('sinon');
const Utils = require('./utils');
const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
    it('will always return a specific num', function () {
        const stub = sinon.stub(Utils.prototype, 'calculateNumber');
        const arg1 = 100,
            arg2 = 20;

        stub.withArgs("SUM", arg1, arg2).returns (10);
        expect(sendPaymentRequestToApi(arg1, arg2)).to.be.equal(10);
    });
});
