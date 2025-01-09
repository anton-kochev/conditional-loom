export type Predicate = Func<boolean>;

const idt =
  <T>(arg: T): Func<T> =>
  (): T =>
    arg;

type Func<R = unknown> = () => R;
