const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber - Chai Tests', function () {
    it('sums up two integers when operator type is SUM', function () {
        const result = calculateNumber('SUM', 1.4, 4.5);
        expect(result).to.equal(6);
    });

    it('returns the difference of  two integers, when operator is SUBTRACT', function () {
        const result = calculateNumber('SUBTRACT', 1.4, 4.5);
        expect(result).to.equal(-4);
    });

    it('returns the remainder of two operators, when operator is DIVIDE', function () {
        const result = calculateNumber('DIVIDE', 1.4, 4.5);
        expect(result).to.equal(0.2);
    });

    it('return Error if the divisor is 0 and the operator is DIVIDE', function() {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.throw('Error');
    })

})
//expect(() => calculateNumber('DIVIDE', 2, 0)).to.throw('Error');
