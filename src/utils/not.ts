import { Predicate } from '../types';
import { falsely } from './conclusion';

export const not =
  (...conditions: Predicate[]): Predicate =>
  () =>
    conditions.length > 0 && conditions.every(c => falsely(c()));
