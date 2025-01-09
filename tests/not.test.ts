import { it, not } from '../src/index';

test('`not` should work with multiple conditions', () => {
  expect(
    it(
      not(
        () => true,
        () => true,
      ),
    ),
  ).toBe(false);
  expect(
    it(
      not(
        () => false,
        () => false,
      ),
    ),
  ).toBe(true);
  expect(
    it(
      not(
        () => true,
        () => false,
      ),
    ),
  ).toBe(false);
});

test('`not` should handle non-boolean values', () => {
  expect(it(not(() => ({}) as boolean))).toBe(true);
  expect(it(not(() => null as unknown as boolean))).toBe(true);
  expect(it(not(() => 1 as unknown as boolean))).toBe(true);
  expect(it(not(() => 'str' as unknown as boolean))).toBe(true);
});

test('`not` should short-circuit evaluation', () => {
  let count = 0;
  const conditions = [() => (count++, true), () => (count++, false)];

  const result = it(not(...conditions));

  expect(result).toBe(false);
  expect(count).toBe(1); // Only first condition was evaluated
});

test('`not` should work with empty conditions', () => {
  expect(it(not()) === it()).toBe(false);
});
