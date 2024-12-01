const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Function', function () {
  it('If the function type is SUM return its rounded sums', function () {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  
  it('If the function type is SUBTRACT return its difference', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  })

  it('if the function type is DIVIDE and divisor is not 0, return remainder', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2)
  })

});
