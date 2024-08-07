// tests/foo.test.ts
import { it } from '../src/it';

test('`it` should be properly imported', () => {
  expect(it).toBeDefined();
});

test('`it` should return true if no arguments are passed', () => {
  expect(it()).toBe(true);
});
