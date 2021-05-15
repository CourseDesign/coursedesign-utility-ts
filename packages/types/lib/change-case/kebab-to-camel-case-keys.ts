import Json, { JsonObject } from "../core/json";
import Prev from "../core/prev";
import KebabToCamelCase from "./kebab-to-camel-case";

type KebabToCamelCaseKeys<T extends Json, D extends number = -1> = [D] extends [
  0
]
  ? T
  : T extends JsonObject
  ? {
      [K in keyof T as KebabToCamelCase<K & string>]: KebabToCamelCaseKeys<
        T[K],
        Prev[D]
      >;
    }
  : T extends (infer J)[]
  ? J extends Json
    ? KebabToCamelCaseKeys<J, D>[]
    : T
  : T;

export default KebabToCamelCaseKeys;
