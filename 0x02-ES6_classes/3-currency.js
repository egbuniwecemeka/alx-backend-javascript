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
  set set_code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  // Getter code
  get get_code() {
    return this._code;
  }

  // Setter name
  set set_name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  // Getter name
  get name() {
    return this._name;
  }
}

export default Currency;