import { it, or } from '../src/index';

test('`or` should return true if any condition is true', () => {
  expect(
    it(
      or(
        () => true,
        () => false,
      ),
    ),
  ).toBe(true);
});

test('`or` should return false if all conditions are false', () => {
  expect(
    it(
      or(
        () => false,
        () => false,
      ),
    ),
  ).toBe(false);
});

test('`or` should return true if no conditions are passed', () => {
  expect(it(or())).toBe(true);
});
