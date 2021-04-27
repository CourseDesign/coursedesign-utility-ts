import CamelToSnakeCase from "./camel-to-snake-case";

// eslint-disable-next-line @typescript-eslint/ban-types
type CamelToSnakeCaseObjectKey<T> = T extends object
  ? {
    [K in keyof T as CamelToSnakeCase<K & string>]: CamelToSnakeCaseObjectKey<
        T[K]
      >;
    }
  : T;

export default CamelToSnakeCaseObjectKey;
