export const truly = <T = unknown>(x: T): boolean => x === true;
export const falsely = <T = unknown>(x: T): boolean => truly(x) === false;
