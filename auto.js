import { Car } from './js/Car.js';

const volvo = new Car('Volvo S40', 'red', 55);
const zapas = new Car('Zapas', 'white', 35);
console.log(volvo.intro());
console.log(minicooper.intro());

console.log(minicooper.refill(-5));
console.log(minicooper.refill(4.2));
console.log(minicooper.refill(null));
console.log(minicooper.refill('pazadais uzpilti'));
console.log(minicooper.refill(NaN));
console.log(minicooper.refill(Infinity));
console.log(minicooper);
console.log(minicooper.countFuel(307));