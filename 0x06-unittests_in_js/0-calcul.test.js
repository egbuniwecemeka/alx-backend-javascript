var assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Function', function () {
    it('should return the sum of two integers without rounding', function () {
        assert.strictEqual(calculateNumber(2, 3), 5)  // Testing with 2 + 3 = 5
    });
});
