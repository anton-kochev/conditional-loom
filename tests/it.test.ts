// test public api
import { and, it, or, Predicate } from '../src/index';

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

test('`it` should work with nested conditions', () => {
  // 20 .. 40, 60 .. 80.
  const condition = and(
    and(
      () => a > 0,
      () => a < 100,
    ),
    or(
      () => a < 40,
      () => a > 60,
    ),
    () => a >= 20,
    () => a <= 80,
  );

  let a = 50;

  expect(it(condition)).toBe(false);

  a = 80;

  expect(it(condition)).toBe(true);

  a = 19;

  expect(it(condition)).toBe(false);
});
