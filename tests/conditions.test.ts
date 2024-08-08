import { it } from '../src/it';
import { Predicate } from '../src/types';

test(`should work with conditions`, () => {
  const conditions: Predicate[] = [() => true, () => true];

  const result = it(...conditions);

  expect(result).toBe(true);
});
