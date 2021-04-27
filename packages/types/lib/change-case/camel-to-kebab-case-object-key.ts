import CamelToKebabCase from "./camel-to-kebab-case";

// eslint-disable-next-line @typescript-eslint/ban-types
type CamelToKebabCaseObjectKey<T> = T extends object
  ? {
      [K in keyof T as CamelToKebabCase<K & string>]: CamelToKebabCaseObjectKey<
        T[K]
      >;
    }
  : T;

export default CamelToKebabCaseObjectKey;
