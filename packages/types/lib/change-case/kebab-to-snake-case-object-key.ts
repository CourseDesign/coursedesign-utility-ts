import KebabToSnakeCase from "./kebab-to-snake-case";

// eslint-disable-next-line @typescript-eslint/ban-types
type KebabToSnakeCaseObjectKey<T> = T extends object
  ? {
      [K in keyof T as KebabToSnakeCase<K & string>]: KebabToSnakeCaseObjectKey<
        T[K]
      >;
    }
  : T;

export default KebabToSnakeCaseObjectKey;
