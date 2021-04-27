import KebabToCamelCase from "./kebab-to-camel-case";
import { JsonObject } from "../json";

type KebabToCamelCaseObjectKey<T> = T extends JsonObject
  ? {
      [K in keyof T as KebabToCamelCase<K & string>]: KebabToCamelCaseObjectKey<
        T[K]
      >;
    }
  : T;

export default KebabToCamelCaseObjectKey;
