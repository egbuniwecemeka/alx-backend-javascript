const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');


describe('sendPaymentRequestToApi - Hooks', function () {
  it('should log the correct total and call Utils.calculateNumber with the right arguments', function () {
    // Create a spy on the console
    const consoleSpy = sinon.spy(console, 'log');

    // Create a stub on Utils.calculateNumber
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Call sendPaymentRequestToApi
    sendPaymentRequestToApi(100, 20);

    // Assert that console.log was called with the right message
    sinon.assert.calledOnceWithExactly(consoleSpy, 'The total is 10');

    // Assert that Utils.calculateNumber was called with the right arguments
    sinon.assert.calledOnceWithExactly(calculateNumberStub, 'SUM', 100, 20);

    // Restore function to original state
    consoleSpy.restore();
    calculateNumberStub.restore();
  });
});