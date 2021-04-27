import KebabToCamelCase from "./kebab-to-camel-case";

// eslint-disable-next-line @typescript-eslint/ban-types
type KebabToCamelCaseObjectKey<T> = T extends object
  ? {
    [K in keyof T as KebabToCamelCase<K & string>]: KebabToCamelCaseObjectKey<
        T[K]
      >;
    }
  : T;

export default KebabToCamelCaseObjectKey;
