
/**
 * Create a memoized function that stores the value in the provided
 * MapLike collection and returns it if available there.
 * @example
 * const getSymbol = withCache(new Map(), key => Symbol(key));
 * getSymbol('john') === getSymbol('john') // => true
 *
 * @param {Map|WeakMap} cache
 * @param {function} factory
 * @returns function
 */
export default function withCache(cache, factory) {
  return key => {
    const maybe = cache.get(key);
    if(maybe !== void(0)) {
      return maybe;
    }

    const value = factory(key, cache);
    cache.set(key, value);
    return value;
  };
};