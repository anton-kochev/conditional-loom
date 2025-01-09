import { Predicate } from './types';
import { truly } from './utils/conclusion';

/**
 * The main function unwraps all the conditions, evaluates them,
 * and returns `true` if all conditions are met. It short-circuits the execution
 * if one of the conditions returns any value rather than `true`.
 *
 * Example:
 *
 * ```ts
 * const condition =
 *   and(
 *     or(
 *       () => a > 0,
 *       () => a < 100,
 *     ),
 *     or(
 *       () => a > 60,
 *       () => a < 80,
 *     ),
 *     () => a > 70,
 *   ),
 * );
 *
 *
 * ```
 *
 * @param conditions - an array of conditions to be evaluated in order to return a boolean value
 * @returns a single boolean value based on the conditions
 */
export const it = (...conditions: Predicate[]): boolean =>
  conditions.every(c => truly(c()));
