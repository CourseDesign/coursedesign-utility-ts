import KebabToCamelCase from "./kebab-to-camel-case";
import { JsonObject } from "../json";

type KebabToCamelCaseKey<T> = T extends JsonObject
  ? {
      [K in keyof T as KebabToCamelCase<K & string>]: KebabToCamelCaseKey<T[K]>;
    }
  : T;

type KebabToCamelCaseObjectKey<T extends JsonObject> = KebabToCamelCaseKey<T>;

export default KebabToCamelCaseObjectKey;
