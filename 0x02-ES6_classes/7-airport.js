export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string' || typeof code !== 'string') {
      throw new TypeError('name or code must be a string');
    }

    this._name = name;
    this._code = code;
}

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
