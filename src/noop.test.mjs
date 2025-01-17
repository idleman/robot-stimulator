import noop from './noop.mjs';
import { strictEqual } from 'node:assert';

describe('noop', function() {

  it('should be a no no operation', function() {
    strictEqual(noop(), void(0));
  });

});