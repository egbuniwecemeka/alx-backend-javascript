var assert = require('assert');

describe('Array', function () {
    describe('#indexOf()', function () {
        it('return 0 if the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});