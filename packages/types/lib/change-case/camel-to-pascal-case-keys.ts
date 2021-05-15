import { Json, JsonObject, Prev } from "../core";
import CamelToPascalCase from "./camel-to-pascal-case";

type CamelToPascalCaseKeys<T extends Json, D extends number = -1> = [
  D
] extends [0]
  ? T
  : T extends JsonObject
  ? {
      [K in keyof T as CamelToPascalCase<K & string>]: CamelToPascalCaseKeys<
        T[K],
        Prev[D]
      >;
    }
  : T extends (infer J)[]
  ? J extends Json
    ? CamelToPascalCaseKeys<J, D>[]
    : T
  : T;

export default CamelToPascalCaseKeys;
