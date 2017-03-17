export class Identity {
  constructor(val) {
    this._value = val;
  }

  chain(f) {
    return this.map(f).join();
  }

  join() {
    return this._value;
  }

  map(f) {
    Identity.of(f(this._value));
  }

  static of(val) {
    return new Identity(val);
  }
}
