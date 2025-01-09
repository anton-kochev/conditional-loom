import { and, it } from '../src/index';

test('`and` should be properly imported', () => {
  expect(and).toBeDefined();
});

test('`and` should return true if and only if all conditions are true', () => {
  expect(
    it(
      and(
        () => true,
        () => true,
      ),
    ),
  ).toBe(true);
});

test('`and` should return false if any condition is false', () => {
  expect(
    it(
      and(
        () => true,
        () => false,
      ),
    ),
  ).toBe(false);
});

test('`and` should return true if no conditions are passed', () => {
  expect(it(and())).toBe(true);
});
