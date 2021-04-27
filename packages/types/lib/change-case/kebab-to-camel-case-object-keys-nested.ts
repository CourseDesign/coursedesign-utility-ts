import KebabToCamelCase from "./kebab-to-camel-case";
import { JsonObject } from "../json";

type KebabToCamelCaseKeys<T> = T extends JsonObject
  ? {
      [K in keyof T as KebabToCamelCase<K & string>]: KebabToCamelCaseKeys<
        T[K]
      >;
    }
  : T extends (infer J)[]
  ? KebabToCamelCaseKeys<J>[]
  : T;

type KebabToCamelCaseObjectKeysNested<
  T extends JsonObject
> = KebabToCamelCaseKeys<T>;

export default KebabToCamelCaseObjectKeysNested;
