const sinon = require('sinon');
const { expect } =require('chai');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');


describe('sendPaymentRequestToApi - Hooks', function () {

  let consoleSpy;

  beforeEach(function () {
    // Set up a spy on console.log before each test
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the console.log function after each test
    consoleSpy.reload();
  });

  it('should log the total of 120 and call console.log is called with 100 and 20', function () {

    // Call sendPaymentRequestToApi
    sendPaymentRequestToApi(100, 20);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWithExactly('The total is: 120')).to.be.true;
  });

  it('should log the total of 20 and call console.log once when called with 10 and 10', function () {

    // Call sendPaymentRequestToApi
    sendPaymentRequestToApi(10, 10);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWithExactly('The total is: 20')).to.be.true;
  });
});