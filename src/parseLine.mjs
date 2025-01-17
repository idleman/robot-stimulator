
function reduceToValues(values, unit) {

  const isWhitespace = (unit.trim() !== unit);
  if(isWhitespace) {
    return values;
  }

  const maybeInteger = parseInt(unit, 10);
  const value = Number.isSafeInteger(maybeInteger) ? maybeInteger : unit;
  return values.concat(value);
}

/**
 * Parse a given line into an array of commands. Assume the provided string
 * may contain newlines (\n) and handle that case if it happens
 * @param {string} str
 */
export default function parseLine(line = '') {
  const collection = [];
  
  line
    .split('\n')
    .map(s => s.trim())
    .filter(s => s.length)
    .forEach(str => {
      const values = str.split('').reduce(reduceToValues, []);
      if(values.length) {
        collection.push(values);
        
      }
    });
    
  return collection;
}