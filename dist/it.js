export const it = (...conditions) => conditions.every((c) => truly(c()));
const truly = (x) => Object.is(x, true);
