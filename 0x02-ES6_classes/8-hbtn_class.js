export default class ALXClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    }

    if (typeof location !== 'string') {
      throw new TypeError('location must be a string');
    }

    this._size = size;
    this._location = location;
  }

  // Custom method when class instance is called directly (Numbers)
  valueOf() {
    return `${this._size}`;
  }

  // Custom method when class instance is called directly (String)
  toString() {
    return `${this._location}`;
  }
}
