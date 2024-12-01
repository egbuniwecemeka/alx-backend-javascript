const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment')
const Utils = require('./utils');

describe('sendPaymentRequestToApi - Sinon test', function () {
    it('should call Utils.calculateNumber with SUM, 100, and 20', function () {
        // Create a spy on console.log
        const calculateNumberSpy = sinon.spy(console, 'log');

        // Create a stub for Utils.calculateNumber
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

        // Call sendPaymentTpApi
        sendPaymentRequestToApi(100, 20);

        // Assert that Utils.calculateNumber was called
        sinon.assert.calledOnceExactlyWith(calculateNumberSpy, 'The total is: 10');

        //Asert that Utils.calculateNumber was called with right arguments
        sinon.assert.calledOnceExactlyWith(calculateNumberStub, 'SUM', 100, 20);

        // Restore the original function
        calculateNumberSpy.restore();
        calculateNumberStub.restore()
    });
});