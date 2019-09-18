// TODO: create a Stack<T> generic class here:
export class Stack<T> {
  private _store: T[];
  constructor() {
    this._store = [];
  }
  push(element: T): void {
    this._store.push(element);
  }
  pop(): T {
    return this._store.pop();
  }
}
