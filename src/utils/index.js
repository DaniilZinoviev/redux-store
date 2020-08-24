export const compose = (...funcs) => (Wrapped) => {
  return funcs.reduceRight((Elem, f) => f(Elem), Wrapped);
};
