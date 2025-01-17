import main from './index.mjs';
import { strictEqual } from 'node:assert';

describe('devoteam', function() {

  it('test', function() {
    strictEqual(main(1, 2), 3);
  })
})