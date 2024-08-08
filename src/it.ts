import { Predicate } from './types';

/**
 * The main function unwraps all the conditions, evaluates them,
 * and returns `true` if all conditions are met. It short-circuits the execution
 * if one of the conditions returns any value rather than `true`.
 *
 * @param conditions - an array of conditions to be evaluated in order to return a boolean value
 * @returns boolean value based on the conditions
 */
export const it = (...conditions: Predicate[]): boolean =>
  conditions.every(c => truly(c()));

const truly = <T = unknown>(x: T): boolean => x === true;
