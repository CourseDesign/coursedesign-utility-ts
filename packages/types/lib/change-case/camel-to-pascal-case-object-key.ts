import CamelToPascalCase from "./camel-to-pascal-case";

// eslint-disable-next-line @typescript-eslint/ban-types
type CamelToPascalCaseObjectKey<T> = T extends object
  ? {
      [K in keyof T as CamelToPascalCase<K & string>]: CamelToPascalCaseObjectKey<
        T[K]
      >;
    }
  : T;

export default CamelToPascalCaseObjectKey;
