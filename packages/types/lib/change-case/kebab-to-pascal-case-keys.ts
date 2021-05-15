import { Json, JsonObject, Prev } from "../core";
import KebabToPascalCase from "./kebab-to-pascal-case";

type KebabToPascalCaseKeys<T extends Json, D extends number = -1> = [
  D
] extends [0]
  ? T
  : T extends JsonObject
  ? {
      [K in keyof T as KebabToPascalCase<K & string>]: KebabToPascalCaseKeys<
        T[K],
        Prev[D]
      >;
    }
  : T extends (infer J)[]
  ? J extends Json
    ? KebabToPascalCaseKeys<J, D>[]
    : T
  : T;

export default KebabToPascalCaseKeys;
