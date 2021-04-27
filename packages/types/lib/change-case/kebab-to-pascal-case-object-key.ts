import KebabToPascalCase from "./kebab-to-pascal-case";

// eslint-disable-next-line @typescript-eslint/ban-types
type KebabToPascalCaseObjectKey<T> = T extends object
  ? {
      [K in keyof T as KebabToPascalCase<K & string>]: KebabToPascalCaseObjectKey<
        T[K]
      >;
    }
  : T;

export default KebabToPascalCaseObjectKey;
