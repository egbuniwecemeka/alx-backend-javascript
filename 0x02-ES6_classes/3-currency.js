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
  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  // Getter code
  get code() {
    return this._code;
  }

  // Setter name
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Getter name
  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}

export default Currency;