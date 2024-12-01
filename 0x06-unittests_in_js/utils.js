// Create a Utils module
const Utils = {
    calculateNumber: function (type, a, b) {
        const opsType = ['SUM', 'SUBTRACT', 'DIVIDE'];

        if (!opsType.includes(type)) {
            throw new Error('Invalid Operator!');
        }

        const roundedA = Math.round(a);
        const roundedB = Math.round(b);

        if (type === opsType[0]) {
            return roundedA + roundedB;
        } else if (type === opsType[1]) {
            return roundedA - roundedB;
        } else if (type === opsType[2]) {
            if (roundedB === 0) {
                return 'Error';
            }
            return roundedA / roundedB;
        }
  }
}

module.exports = Utils;