const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const sum = Utils.calculateNumber('SUM', totalShipping, totalShipping);

  console.log(`The total is: ${sum}`);
}

module.exports = sendPaymentRequestToApi;