// TODO: Import the stack here
import { Stack } from './stack';

describe('Stack', () => {
  it('should push item to the top of the stack', () => {
    // TODO: implement test here:
    // 1. Instantiate a new Stack - i.e. const stack = new Stack<number>();
    // 2. Use stack push calls to add some items to the stack
    // 3. Write assertions via the expect() API
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.count).toBe(3);
  });

  it('should pop the item from the top of stack', () => {
    // TODO: implement test here:
    // 1. Instantiate a new Stack - i.e. const stack = new Stack<number>();
    // 2. Use stack push calls to add some items to the stack
    // 3. pop a few items off the stack
    // 4. write assertions via the expect() API
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    const item = stack.pop();
    expect(stack.count).toBe(2);
    expect(item).toEqual(3);
  });
});
