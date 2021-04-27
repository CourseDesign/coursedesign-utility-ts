import KebabToSnakeCase from "./kebab-to-snake-case";
import { JsonObject } from "../json";

type KebabToSnakeCaseObjectKey<T> = T extends JsonObject
  ? {
      [K in keyof T as KebabToSnakeCase<K & string>]: KebabToSnakeCaseObjectKey<
        T[K]
      >;
    }
  : T;

export default KebabToSnakeCaseObjectKey;
