const MyClass = require('./myClass');
const sinon = require('sinon');

const myObj = new MyClass();

describe('Test with spy', function() {
    it('spy the add method', function() {
        let spy = sinon.spy(myObj, 'add');
        let arg1 = 100, arg2 = 20;
        myObj.callAnotherFn(arg1, arg2);
        sinon.assert.calledOnce(spy)
    })
})