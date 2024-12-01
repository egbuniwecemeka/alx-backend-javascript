const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi - Sinon test', function () {
    it('should call Utils.calculateNumber with SUM, 100, 20', function () {
        // Create a spy on Utils.calculateNumber
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

        // Call sendPaymentRequestToApi
        sendPaymentRequestToApi(100, 20);

        // Assert Utils.calculateNumber was called once with the right arguments
        sinon.assert.calledOnceWithExactly(calculateNumberSpy, 'SUM', 100, 20);

        calculateNumberSpy.restore()
    });
});
