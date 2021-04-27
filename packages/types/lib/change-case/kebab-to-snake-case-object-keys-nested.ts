import KebabToSnakeCase from "./kebab-to-snake-case";
import { JsonObject } from "../json";

type KebabToSnakeCaseKeys<T> = T extends JsonObject
  ? {
      [K in keyof T as KebabToSnakeCase<K & string>]: KebabToSnakeCaseKeys<
        T[K]
      >;
    }
  : T extends (infer J)[]
  ? KebabToSnakeCaseKeys<J>[]
  : T;

type KebabToSnakeCaseObjectKeysNested<
  T extends JsonObject
> = KebabToSnakeCaseKeys<T>;

export default KebabToSnakeCaseObjectKeysNested;
