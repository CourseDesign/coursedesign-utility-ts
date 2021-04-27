import PascalToSnakeCase from "./pascal-to-snake-case";

// eslint-disable-next-line @typescript-eslint/ban-types
type PascalToSnakeCaseObjectKey<T> = T extends object
  ? {
      [K in keyof T as PascalToSnakeCase<
        K & string
      >]: PascalToSnakeCaseObjectKey<T[K]>;
    }
  : T;

export default PascalToSnakeCaseObjectKey;
