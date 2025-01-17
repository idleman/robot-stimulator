const Commands = { TurnLeft: 'L', TurnRight: 'R', WalkForward: 'F' };
//const Orientation = { North: 'N', South: 'S', East: 'E', West: 'W' };

import Room from './Room.mjs';
import Position from './Position.mjs';
import Orientation from './Orientation.mjs';




class State {

  constructor() {
    this.room = new Room();
    this.position = new Position();
    this.orientation = new Orientation();
  }
}

export default function* Engine() {
  const state = new State();
  const [roomX, roomY] = yield;
  state.room.set(roomX, roomY);
  const [positionX, positionY, orientation] = yield;
  state.position.set(positionX, positionY);
  state.orientation.set(orientation);
  
  console.log('Got', { roomX, roomY });
  return [3, 1, 'E'];
}