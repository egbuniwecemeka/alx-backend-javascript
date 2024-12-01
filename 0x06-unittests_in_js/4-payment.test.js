const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment')
const Utils = require('./utils');
const calculateNumber = require('./1-calcul');

describe('sendPaymentRequestToApi - Sinon test', function () {
    it('', function () {
        // Create a spy on Utils.calculateNumber
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

        // Call sendPaymentTpApi
        sendPaymentRequestToApi(100, 20);

        // Assert that Utils.calculateNumber was called with the right arguments
        sinon.assert.calledOnceExactlyWith(calculateNumberSpy, 'SUM', 100, 20);

        // Restore the original function
        calculateNumberSpy.restore();
    });
});