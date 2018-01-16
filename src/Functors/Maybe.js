import { maybe } from '../functions';

export class Maybe {
  constructor(val) {
    this.__value = val;
  }

  chain(f) {
    return this.map(f).join();
  }

  join() {
    return this.__value;
  }

  map(f) {
    return Maybe.of(maybe(this.__value, f));
  }

  static of(val) {
    return new Maybe(val);
  }
}