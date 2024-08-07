export const it = (...conditions: Predicate[]): boolean =>
  conditions.every((c) => truly(c()));

const truly = (x: unknown): boolean => Object.is(x, true);
