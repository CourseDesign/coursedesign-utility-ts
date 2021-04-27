import SnakeToCamelCase from "./snake-to-camel-case";

// eslint-disable-next-line @typescript-eslint/ban-types
type SnakeToCamelCaseObjectKey<T> = T extends object
  ? {
      [K in keyof T as SnakeToCamelCase<K & string>]: SnakeToCamelCaseObjectKey<
        T[K]
      >;
    }
  : T;

export default SnakeToCamelCaseObjectKey;
