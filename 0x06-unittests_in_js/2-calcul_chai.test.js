const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

expect(calculateNumber('SUM', 1.4, 4.5).to.equal(6));
