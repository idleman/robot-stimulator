import Orientation from './Orientation.mjs';
import { strictEqual } from 'node:assert'


describe('Orientation', function() {

  describe('#getAsInteger', function() {

    const tests = [
      ['North', 0],
      ['East', 1],
      ['South', 2],
      ['West', 3]
    ];

    for(const [name, expect] of tests) {
      it(`should expect ${name} to have integer value=${expect}`, function() {
        const orientation = new Orientation(Orientation[name]);
        const got = orientation.getAsInteger();
        strictEqual(got, expect);
      });
    }

  });

  describe('#rotate', function() {

    const tests = [
      ['North', 1, 'East'],
      ['North', -1, 'West'],
      
      ['East', 1, 'South'],
      ['East', -1, 'North'],

      ['South', 1, 'West'],
      ['South', -1, 'East'],

      ['West', 1, 'North'],
      ['West', -1, 'South'],

      // Some more "special case"
      ['North', -2, 'South'],
      ['North', -3, 'East'],
      ['North', -4, 'North'],
    ];

    for(const [initial, direction, expect] of tests) {
      it(`should expect ${initial} to end up at location=${expect} with direction=${direction}`, function() {
        const orientation = new Orientation(Orientation[initial]);
        strictEqual(orientation.get(), Orientation[initial])
        orientation.rotate(direction);
        strictEqual(orientation.get(), Orientation[expect])
      });
    }

  });
});