const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment')
const Utils = require('./utils');

describe('sendPaymentRequestToApi - Sinon test', function () {
    it('should call Utils.calculateNumber with SUM, 100, and 20, als logging the total', function () {
        // Create a spy on console.log
        const consoleSpy = sinon.spy(console, 'log');
        // Create a stub for Utils.calculateNumber to always return 10
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

        // Call sendPaymentToApi
        sendPaymentRequestToApi(100, 20);

        // Assert that console.log was called with the right message
        sinon.assert.calledOnceExactlyWith(consoleSpy, 'The total is: 10');
        //Asert that Utils.calculateNumber was called with right arguments
        sinon.assert.calledOnceExactlyWith(calculateNumberStub, 'SUM', 100, 20);

        // Restore the original function
        consoleSpy.restore();
        calculateNumberStub.restore()
    });
});