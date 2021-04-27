import PascalToCamelCase from "./pascal-to-camel-case";

// eslint-disable-next-line @typescript-eslint/ban-types
type PascalToCamelCaseObjectKey<T> = T extends object
  ? {
      [K in keyof T as PascalToCamelCase<
        K & string
      >]: PascalToCamelCaseObjectKey<T[K]>;
    }
  : T;

export default PascalToCamelCaseObjectKey;
