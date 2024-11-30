function calculateNumber(type, a, b) {
    const opsType = ['SUM', 'SUBTRACT', 'DIVIDE'];

  if (!opsType.includes(type)) {
    throw new Error('Does not include operation type');
  }

  const roundedA = Math.round(a);
  const roundedB = Math.round(b)

  if (type === opsType[0]) {
    return roundedA + roundedB;
  } else if (type === opsType[1]) {
    return roundedA - roundedB;
  } else if (type === opsType[2]) {
    if (roundedB === 0) {
        throw new Error('Error');
    }
    return roundedA / roundedB;
  }
}

module.exports = calculateNumber;