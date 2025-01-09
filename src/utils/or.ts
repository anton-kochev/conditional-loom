import { Predicate } from '../types';
import { truly } from './conclusion';

export const or =
  (...conditions: Predicate[]): Predicate =>
  () =>
    conditions.length > 0 ? conditions.some(c => truly(c())) : true;
