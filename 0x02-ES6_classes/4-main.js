import Currency from './3-currency';
import Pricing from './4-pricing';

const p = new Pricing(100, new Currency('EUR', 'Euro'));
console.log(p);
console.log(p.displayFullPrice());