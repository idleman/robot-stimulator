import withCache from '../withCache.mjs';

const from = withCache(new Map(), type => new Command(type));

export default class Command {

  static None = '';
  static TurnLeft = 'L';
  static TurnRight = 'R';
  static WalkForward = 'F';

  static isValid(v) {
    return  Command.None == v || 
            Command.TurnLeft == v || 
            Command.TurnRight == v || 
            Command.WalkForward == v;
  }

  static assertValid(v) {
    if(!Command.isValid(v)) {
      throw new Error(`Unknown command (got=${v})`);
    }
    return v;
  }

  static from(v) {
    // We could make so this function
    return from(v);
  }

  constructor(type, ...args) {
    this.type = Command.assertValid(type ?? Command.None);
    this.args = args;
  }

};