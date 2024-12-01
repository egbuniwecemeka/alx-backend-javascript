const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber - Chai Tests', function () {
    it('sums up two integers when operator type is SUM', function () {
        const result = calculateNumber('SUM', 1.4, 4.5);
        expect(result).to.equal(6);
    });


})
//expect(() => calculateNumber('DIVIDE', 2, 0)).to.throw('Error');
