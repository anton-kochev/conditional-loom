# Conditional Loom

A lightweight TypeScript library for composing and evaluating complex conditional logic with short-circuit evaluation.

## Features

- 🎯 Compose complex conditions using `and`, `or`, and `not` operators
- ⚡ Short-circuit evaluation for better performance
- 🔒 Type-safe with full TypeScript support
- 🪶 Zero dependencies
- 📦 Small bundle size

## Installation

```bash
npm install conditional-loom
```

## Usage

```ts
import { it, and, or, not } from "conditional-loom";
// Simple conditions
const isValid = it(() => someValue > 0);
// Complex nested conditions
const complexCondition = and(
  or(
    () => value > 0,
    () => value < 100,
  ),
  not(() => value === 50),
);
const result = it(complexCondition);
```

### Composing Conditions

You can compose complex conditions using the following operators:

#### `and`

Evaluates to `true` only if all conditions are `true`:

```typescript
const condition = and(
  () => value > 0,
  () => value < 100,
);
```

#### `or`

Evaluates to `true` if any condition is `true`:

```typescript
const condition = or(
  () => value < 40,
  () => value > 60,
);
```

#### `not`

Inverts the result of conditions:

```typescript
const condition = not(() => value === 0);
```

### Short-Circuit Evaluation

The library implements short-circuit evaluation for better performance. For example, in an `and` operation, if any condition returns `false`, the remaining conditions won't be evaluated.

## API Reference

### `it(...conditions: Predicate[]): boolean`

The main function that evaluates conditions and returns a boolean result.

### `and(...conditions: Predicate[]): Predicate`

Combines multiple conditions with logical AND.

### `or(...conditions: Predicate[]): Predicate`

Combines multiple conditions with logical OR.

### `not(...conditions: Predicate[]): Predicate`

Inverts the result of conditions.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Anton Kochev
