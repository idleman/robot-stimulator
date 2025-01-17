
import Room from './Room.mjs';
import Robot from './Robot.mjs';
import Command from './Command.mjs';


class State {

  constructor() {
    this.room = new Room();
    this.robot = new Robot();
  }

  execute(command) {
    this.robot.execute(command);
  }

  report() {
    const { position: { x, y }, orientation } = this.robot;
    return [x, y, orientation.value];
  }
}

export default function* App() {
  while(true) {
    const state = new State();
    const [roomX, roomY] = yield;
    state.room.set(roomX, roomY);
    
    const { robot: { position, orientation } } = state;
    const [positionX, positionY, direction] = yield;
    orientation.set(direction);
    position.set(positionX, positionY);
    const commands = yield;
    commands.forEach(cmd => state.execute(Command.from(cmd)));
    yield state.report();
  }
}