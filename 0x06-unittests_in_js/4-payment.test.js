const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment')
const Utils = require('./utils');

describe('sendPaymentRequestToApi - Sinon test', function () {
    it('should call Utils.calculateNumber with SUM, 100, and 20', function () {
        // Create a spy on Utils.calculateNumber
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

        // Create a stub for Utils.calculateNumber
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

        // Call sendPaymentTpApi
        sendPaymentRequestToApi(100, 20);

        // Assert that Utils.calculateNumber was called with the right arguments
        sinon.assert.calledOnceExactlyWith(calculateNumberSpy, 'SUM', 100, 20);

        //Asert that Utils.calculateNumber was called with right arguments
        sinon.assert.calledOnceWith(calculateNumberStub, 'SUM', 100, 20);

        // Restore the original function
        calculateNumberSpy.restore();
        calculateNumberStub.restore()
    });
});