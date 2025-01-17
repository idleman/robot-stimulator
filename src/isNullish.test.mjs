import isNullish from './isNullish.mjs';
import { strictEqual } from 'node:assert';

describe('isNullish', function() {

  it('should return true on null or undefined values', function() {
    strictEqual(isNullish(), true);
    strictEqual(isNullish(null), true);
    strictEqual(isNullish(void(0)), true);
    
    // Test none nullish values:
    strictEqual(isNullish(0), false);
    strictEqual(isNullish(''), false);
    strictEqual(isNullish(globalThis.NaN), false);
  });
  

});