import Engine from './Engine.mjs';
import Channel from '../Channel.mjs';
import { strictEqual } from 'node:assert'


describe('robot/Engine', function() {

  it('should fail', function() {
    const channel = new Channel(Engine);
    channel.send(5, 7);
    const result = channel.send('QUIT');
    strictEqual(result, 1 + 2 + 3);
  });

});