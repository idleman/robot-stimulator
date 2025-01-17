export default class Orientation {

  static East = 'E';
  static West = 'W';
  static North = 'N';
  static South = 'S';

  static isValid(v) {
    return  Orientation.East == v || 
            Orientation.West == v || 
            Orientation.North == v ||
            Orientation.South == v;
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

};