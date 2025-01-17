export default function addEventListener(object, type, cb) {
  object.on(type, cb);
  let unsubscribed = false;
  return () => {
    if(unsubscribed === false) {
      object.removeListener(type, cb);
      unsubscribed = true;
    }
  };
};