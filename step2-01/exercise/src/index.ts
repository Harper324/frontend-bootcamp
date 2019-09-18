// TODO: import the fib(n) function and the constant from './fibonacci.ts'
import FibConst, { fib } from './fibonacci';

// TODO: import Stack from ...
import { Stack } from './stack';
import async from '../../demo/src/async';

// Do the exercises here, outputting results using console.log()
console.log('hello world');

// ---- Modules ----

// TODO: log the result of fib(FibConst)
console.log(fib(FibConst));

// ---- Types and Interfaces ----

// TODO: define TrafficLight type
type TrafficLight = 'Red' | 'Yellow' | 'green';

// TODO: define Car interface
interface Car {
  wheels: string;
  color: string;
  make: string;
  model: string;
}

// TODO: create Car instance
class MyCar implements Car {
  wheels: string;
  color: string;
  make: string;
  model: string;
  constructor(wheels: string, color: string, make: string, model: string) {
    this.wheels = wheels;
    this.color = color;
    this.make = make;
    this.model = model;
  }
}
const myCar: Car = new MyCar('4', 'black', 'USA', 'A4');
console.log(myCar);

// ---- Generics ----

// TODO: Demonstrate the Stack
const myStack: Stack<number> = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack);

// ---- Spread and Destructuring ----
const obj1 = {
  first: 'who',
  second: 'what',
  third: 'dunno',
  left: 'why'
};

const obj2 = {
  center: 'because',
  pitcher: 'tomorrow',
  catcher: 'today'
};

// TODO: combine obj1 and obj2 into a single object megaObj using spread syntax
const megaObj = { ...obj1, ...obj2 };
console.log(megaObj);

// TODO: use destructuring syntax to extract { first, second, catcher }
const { first, second, catcher } = megaObj;
console.log(first, second, catcher);

// ---- Async / Await ----
function makePromise() {
  return Promise.resolve(5);
}

// TODO: create a new async function
async function otherRun(): Promise < number > {
  return 9;

}

async function run() {
  // TODO: call makePromise() using await syntax and log the results
  // TODO: call your new async function
  const first = await makePromise();
  console.log(first);
  const second = await otherRun();
  console.log(second);
}

run();

// Make this file a module so its code doesn't go in the global scope
export { };
