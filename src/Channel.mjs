/**
 *  The purpose of this clss is to ease communication to and from a ES6 Generator
 */

import noop from './noop.mjs';


export default class Channel {


  constructor(generator = noop, ...args) {
    this.iterator = generator(...args);
    this.state = this.iterator.next();
  }

  send(...args) {
    const { done, value } = this.state;
    if(done) {
      return value;
    }
    const iterator = this.iterator;
    this.state = iterator.next(args);
    return this.state.value;
  }

}