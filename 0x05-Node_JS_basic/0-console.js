function displayMessage(stdout) {
  if (typeof stdout === 'string') {
    console.log(stdout);
  }
}

module.exports = displayMessage;
