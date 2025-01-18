
export default class Room {

  constructor(width = 0, height = 0) {
    this.width = width;
    this.height = height;
  }

  set(width = 0, height = 0) {
    this.width = width;
    this.height = height;
  }

  /**
   * Return true if the position is located within the
   * room, otherwise false.
   * 
   * @param {Position} position 
   * @returns {boolean}
   */
  contains(position) {
    return  0 <= position.x &&
            0 <= position.y &&
            position.x <= this.width &&
            position.y <= this.height;
  }

};