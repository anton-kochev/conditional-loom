import { Predicate } from '../types';
import { truly } from './conclusion';

export const and =
  (...conditions: Predicate[]): Predicate =>
  (): boolean =>
    conditions.every(x => truly(x()));
