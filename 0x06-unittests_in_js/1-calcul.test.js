const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Function', function () {
  it('If the function type is SUM return its rounded sums', function () {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });
});