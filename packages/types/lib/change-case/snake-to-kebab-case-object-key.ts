import SnakeToKebabCase from "./snake-to-kebab-case";

// eslint-disable-next-line @typescript-eslint/ban-types
type SnakeToKebabCaseObjectKey<T> = T extends object
  ? {
      [K in keyof T as SnakeToKebabCase<K & string>]: SnakeToKebabCaseObjectKey<
        T[K]
      >;
    }
  : T;

export default SnakeToKebabCaseObjectKey;
