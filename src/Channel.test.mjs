import forward from './forward.mjs';
import Channel from './Channel.mjs';
import { strictEqual } from 'node:assert'


const adder = (() => {
  const handlers = new Map([
    ['ADD', (state, value) => state + value]
  ]);

  return function* adder(state = 0) {
    
    while(true) {
      const got = yield;
      const [cmd, ...args] = got;
      if(cmd === 'QUIT') {
        return state;
      }
      const cb = handlers.get(cmd) ?? forward;
      const nextState = cb(state, ...args);
      state = nextState;
    }
  }
})();

describe('Channel', function() {

  it('should support basic usage', function() {
    const channel = new Channel(adder, 1);
    channel.send('ADD', 2);
    channel.send('ADD', 3);
    const result = channel.send('QUIT');
    strictEqual(result, 1 + 2 + 3);
  });

});