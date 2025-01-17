import App from './App.mjs';
import Channel from '../Channel.mjs';
import { strictEqual } from 'node:assert'


describe('robot/App', function() {

  it('should work with the first assignment example', function() {
    const channel = new Channel(App);
    channel.send(5, 5);
    channel.send(1, 2, 'N');
    channel.send('R','F', 'R', 'F', 'F', 'R', 'F', 'R', 'F');
    strictEqual(channel.state.value.join(' '), '1 3 N')
  });

  it('should work with the second assignment example', function() {
    const channel = new Channel(App);
    channel.send(5, 5);
    channel.send(0, 0, 'E');
    channel.send('R', 'F', 'L', 'F', 'F', 'L', 'R' , 'F');
    strictEqual(channel.state.value.join(' '), '3 1 E')
  });
});