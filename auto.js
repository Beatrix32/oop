import { Car } from './js/Car.js';

const volvo = new Car('Volvo S40', 'red', 55);
const Minicooper = new Car('Minicooper', 'teal', 35, 8);
console.log(volvo.intro());
console.log(Minicooper.intro());

console.log(Minicooper.refill(-5));
console.log(Minicooper.refill(4.2));
console.log(Minicooper.refill(null));
console.log(Minicooper.refill('pazadais uzpilti'));
console.log(Minicooper.refill(NaN));
console.log(Minicooper.refill(Infinity));
console.log(Minicooper)
console.log(Minicooper.countFuel(289));