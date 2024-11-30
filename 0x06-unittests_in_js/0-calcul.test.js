var assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Function', function () {
    it('should return the sum of two integers without rounding', function () {
        assert.strictEqual(calculateNumber(2, 3), 5);
    });

    it('should round up both integers before summing up', function () {
        assert.strictEqual(calculateNumber(1.3, 4.8), 6);
    });

    it('should round up the second integer correctly before summing', function () {
        assert.strictEqual(calculateNumber(2, 4.4), 6);
    });

    it('should handle integers at midpoints correctly', function () {
        assert.strictEqual(calculateNumber(1.5, 4.8), 7);
    });
});
