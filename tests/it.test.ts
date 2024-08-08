// tests/foo.test.ts
import { it } from '../src/it';
import { Predicate } from '../src/types';

test('`it` should be properly imported', () => {
  expect(it).toBeDefined();
});

test('`it` should return true if no arguments are passed', () => {
  expect(it()).toBe(true);
});

test('`it` should correctly interpret true value', () => {
  const r2 = it(() => true);
  const r1 = it(() => false);
  const r3 = it(() => ({}) as boolean);
  const r4 = it(() => null as unknown as boolean);
  const r5 = it(() => 1 as unknown as boolean);
  const r6 = it(() => 'str' as unknown as boolean);

  expect(r2).toBe(true);
  expect(r1).toBe(false);
  expect(r3).toBe(false);
  expect(r4).toBe(false);
  expect(r5).toBe(false);
  expect(r6).toBe(false);
});

test('`it` should cancel the execution if one of the conditions returns false', () => {
  let a = 0;
  const conditions: Predicate[] = [() => (a++, false), () => (a++, true)];

  const result = it(...conditions);

  expect(result).toBe(false);
  expect(a).toBe(1);
});
