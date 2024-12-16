import Currency from "./3-currency";

class Pricing {
    constructor(amount, currency) {
      // Type check for amount attribute
      if (typeof amount !== 'number') {
        throw new TypeError('Amount should be a number');
      }

      if (!(currency instanceof Currency)) {
        throw new TypeError('Currency should be an instance of Currency class');
      }

      // Initializing protected attribute
      this._amount = amount;
      this._currency = currency;
    }

    // Getter amount
    get pricingAmount() {
      return this._amount;
    }

    // Setter amount
    set pricingAmount(value) {
      if (typeof value !== 'number') {
        throw new TypeError('Amount should be a number');
      }
      this._amount = value;
    }

    // Getter currency
    get pricingCurrency() {
        return this._currency;
    }

    // Setter currency
    set pricingCurrency(value) {
      if (!(value instanceof Currency)) {
        throw new TypeError('Currency should be an instance of Currency class');
      }
      this._currency = value;
    }

    displayFullPrice() {
      return `${this.pricingAmount} ${this.pricingCurrency.name} (${this.pricingCurrency.code})`;
    }
}