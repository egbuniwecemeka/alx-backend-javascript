const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Function', function () {
  it('If the function type is SUM return its rounded sums', function () {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.strictEqual(calculateNumber('SUM', 2.7, 3.4), 6);
  });
  
  it('If the function type is SUBTRACT return its difference', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  })

});