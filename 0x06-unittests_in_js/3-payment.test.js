const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi - Sinon test', function () {
    it('', function () {
        const addSpy = sendPaymentRequestToApi(100, 20);
        sinon.spy(addSpy, 'add')
    })
})