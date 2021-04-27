import SnakeToPascalCase from "./snake-to-pascal-case";

// eslint-disable-next-line @typescript-eslint/ban-types
type SnakeToPascalCaseObjectKey<T> = T extends object
  ? {
      [K in keyof T as SnakeToPascalCase<
        K & string
      >]: SnakeToPascalCaseObjectKey<T[K]>;
    }
  : T;

export default SnakeToPascalCaseObjectKey;
