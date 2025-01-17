import forward from './forward.mjs';
import { strictEqual } from 'node:assert';

describe('forward', function() {

  it('should be a placeholder', function() {
    strictEqual(forward(), void(0));
    strictEqual(forward(1, 2), 1);
    strictEqual(forward(null, 1), null);
    strictEqual(forward(void(0), 1), void(0));
  });

});