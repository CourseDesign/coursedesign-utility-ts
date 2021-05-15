import { Json, JsonObject, Prev } from "../core";
import PascalToCamelCase from "./pascal-to-camel-case";

type PascalToCamelCaseKeys<T extends Json, D extends number = -1> = [
  D
] extends [0]
  ? T
  : T extends JsonObject
  ? {
      [K in keyof T as PascalToCamelCase<K & string>]: PascalToCamelCaseKeys<
        T[K],
        Prev[D]
      >;
    }
  : T extends (infer J)[]
  ? J extends Json
    ? PascalToCamelCaseKeys<J, D>[]
    : T
  : T;

export default PascalToCamelCaseKeys;
