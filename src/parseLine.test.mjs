import { strictEqual } from 'node:assert';
import parseLine from './parseLine.mjs';

describe('parseLine', function() {

  it('should convert values to integers if possible', function() {
    const statements = parseLine('1 2 N');
    strictEqual(statements.length, 1);
    const expression = statements[0];
    strictEqual(expression.length, 3);
    strictEqual(expression[0], 1);
    strictEqual(expression[1], 2);
    strictEqual(expression[2], 'N');
  });

  it('should have handle if the line contain newlines', function() {
    const statements = parseLine('1 2 N\nRFRFFRFRF\n\n');
    strictEqual(statements.length, 2);
    {
      const expression = statements[0];
      strictEqual(expression.length, 3);
      strictEqual(expression[0], 1);
      strictEqual(expression[1], 2);
      strictEqual(expression[2], 'N');
    }

    {
      const expression = statements[1];
      strictEqual(expression.length, 9);
      strictEqual(expression.join(','), 'R,F,R,F,F,R,F,R,F');
    }
    
  });

});