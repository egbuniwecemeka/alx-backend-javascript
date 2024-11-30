var assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Function', function () {
    it('should return the sum of two numbers', function () {
        assert.strictEqual(calculateNumber(2, 3), 5)  // Testing with 2 + 3 = 5
    })
})