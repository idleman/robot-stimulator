const values = ['N', 'E', 'S', 'W'];

export default class Orientation {

  static North = 'N';
  static East = 'E';
  static South = 'S';
  static West = 'W';
  
  static isValid(v) {
    return values.includes(v);
  }

  static assertValid(v) {
    if(!Orientation.isValid(v)) {
      throw new Error(`Unknown orientation (got=${v})`);
    }
    return v;
  }

  constructor(value) {
    this.value = Orientation.assertValid(value ?? Orientation.North);
  }

  set(value) {
    this.value = Orientation.assertValid(value);
  }

  get() {
    return this.value;
  }

  rotate(v = 0) {
    if(v === 0) {
      return this;
    }
    const max = values.length;
    const distance = this.getAsInteger() + v;
    const next = (0 <= distance) ? distance%max : ((v%max) + max)%max;
    return this.setAsInteger(next);
  }

  getAsInteger() {
    const values = [Orientation.North, Orientation.East, Orientation.South, Orientation.West];
    return values.indexOf(this.value);
  }

  setAsInteger(index = 0) { 
    this.value = Orientation.assertValid(values[index]);
    return this;
  }

};