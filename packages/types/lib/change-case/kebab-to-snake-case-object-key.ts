import KebabToSnakeCase from "./kebab-to-snake-case";
import { JsonObject } from "../json";

type KebabToSnakeCaseKey<T> = T extends JsonObject
  ? {
      [K in keyof T as KebabToSnakeCase<K & string>]: KebabToSnakeCaseKey<T[K]>;
    }
  : T;

type KebabToSnakeCaseObjectKey<T extends JsonObject> = KebabToSnakeCaseKey<T>;

export default KebabToSnakeCaseObjectKey;
