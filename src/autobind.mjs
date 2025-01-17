import withCache from './withCache.mjs';

const inbuiltMethods = ['constructor'];
const getContextMethods = withCache(new WeakMap(), context => {
  // We may actually want to use Object.keys instead because Reflect.ownKeys
  // will return getters as well.
  return Reflect
    .ownKeys(Object.getPrototypeOf(context))
    .filter(name => !inbuiltMethods.includes(name) && typeof context[name] === 'function');
});

function setContextMethods(context, methods) {
  methods.forEach(name => (context[name] = context[name].bind(context)));
  return context;
}

/**
 * Bind all found methods on a provided object prototype to itself. This will
 * ensure the "this" value always has the correct value no matter how the
 * function is invoked.
 *
 * @example autobind(this)
 * @param {object} context
 * @returns {object} context
 */
export default function autobind(context, methods = null) {
  return setContextMethods(context, methods ?? getContextMethods(context));
};