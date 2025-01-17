import Command from './Command.mjs';
import Position from './Position.mjs';
import Orientation from './Orientation.mjs';

export default class Robot {

  constructor(position = new Position(), orientation = new Orientation()) {
    this.position = position;
    this.orientation = orientation;
  }
  
  execute(command) {
    switch(command.type) {
      case Command.None:
        return;
      case Command.TurnLeft:
        return this.orientation.rotate(-1);
      case Command.TurnRight:
        return this.orientation.rotate(1);
      case Command.WalkForward:
        return this.forward();
      default:
        return;
    }
  }

  forward() {
    const position = this.position;
    switch(this.orientation.value) {
      case Orientation.North:
        --position.y;
        break;
      case Orientation.South:
        ++position.y;
        break;
      case Orientation.East:
        ++position.x;
        break;
      case Orientation.West:
        --position.x;
        break;
      default:
        throw new Error(`Unsupported orientation (got=${this.orientation.type})`)
    }
  }
};