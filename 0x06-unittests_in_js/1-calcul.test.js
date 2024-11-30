const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Function', function () {
  it('If the function type is SUM return its rounded sums', function () {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.strictEqual(calculateNumber('SUM', 2.7, 3.4), 6);
  });

  it('If the function type is SUBTRACT return its rounded difference', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.strictEqual(calculateNumber('SUBTRACT', 2.6, 1.4), 2);
  });

  it('If the function type is DIVIDE return its rounded remainder', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.strictEqual(calculateNumber('DIVIDE', 5.6, 2.4), 3);
  });
});