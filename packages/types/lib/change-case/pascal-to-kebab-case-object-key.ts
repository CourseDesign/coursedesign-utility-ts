import PascalToKebabCase from "./pascal-to-kebab-case";

// eslint-disable-next-line @typescript-eslint/ban-types
type PascalToKebabCaseObjectKey<T> = T extends object
  ? {
      [K in keyof T as PascalToKebabCase<
        K & string
      >]: PascalToKebabCaseObjectKey<T[K]>;
    }
  : T;

export default PascalToKebabCaseObjectKey;
