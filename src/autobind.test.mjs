import autobind from './autobind.mjs';
import { strictEqual } from 'node:assert';

describe('autobind', function() {

  
  it('should bind members to the class', function() {

    class Person {

      constructor(name) {
        autobind(this);
        this.name = name;
      }

      sayHello() {
        return `Hi ${this.name}!`;
      }

    }

    const john = new Person('John');
    strictEqual(john.sayHello(), 'Hi John!');
    const jane = new Person('Jane');
    strictEqual(jane.sayHello(), 'Hi Jane!');

    strictEqual(john.sayHello.call(jane), 'Hi John!');

  });

});