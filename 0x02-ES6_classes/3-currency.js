class Currency {
  constructor(code, name){
    // Type check for code attribute
    if (typeof code !== 'string') {
        throw new TypeError('Code must be a string');
    }

    // Type check for name attribute
    if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
    }

    // Initialize protected attribute
    this._code = code;
    this._name = name
  }

  // Setter code
  set currencyCode(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // Getter code
  get currencyCode() {
    return this._code;
  }

  // Setter name
  set currencyName(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Getter name
  get currencyName() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this.currencyName} (${this.currencyCode})`;
  }
}

export default Currency;