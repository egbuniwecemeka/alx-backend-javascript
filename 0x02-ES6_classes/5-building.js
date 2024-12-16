class Building {
  constructor(sqft) {
    // Type check for sqft
    if (typeof sqft !== 'number') {
        throw new TypeError('sqft must be a number');
    }

    this._sqft = sqft;
  }

  // Getter sqft attribute
  get sqft() {
    return this.sqft;
  }
}