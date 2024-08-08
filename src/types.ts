export type Predicate = Func<boolean>;

type Func<R = unknown> = () => R;
