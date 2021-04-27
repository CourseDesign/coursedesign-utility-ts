import SnakeToCamelCase from "./snake-to-camel-case";
import { JsonObject } from "../json";

type SnakeToCamelCaseKey<T> = T extends JsonObject
  ? {
      [K in keyof T as SnakeToCamelCase<K & string>]: SnakeToCamelCaseKey<T[K]>;
    }
  : T;

type SnakeToCamelCaseObjectKey<T extends JsonObject> = SnakeToCamelCaseKey<T>;

export default SnakeToCamelCaseObjectKey;
