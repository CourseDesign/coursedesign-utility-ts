import SnakeToCamelCase from "./snake-to-camel-case";
import { JsonObject } from "../json";

type SnakeToCamelCaseObjectKey<T> = T extends JsonObject
  ? {
      [K in keyof T as SnakeToCamelCase<K & string>]: SnakeToCamelCaseObjectKey<
        T[K]
      >;
    }
  : T;

export default SnakeToCamelCaseObjectKey;
