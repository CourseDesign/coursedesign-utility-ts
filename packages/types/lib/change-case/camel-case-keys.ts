import { Json, JsonObject, Prev } from "../core";
import CamelCase from "./camel-case";

type CamelCaseKeys<T extends Json, D extends number = -1> = [D] extends [0]
  ? T
  : T extends JsonObject
  ? {
      [K in keyof T as CamelCase<K & string>]: CamelCaseKeys<T[K], Prev[D]>;
    }
  : T extends (infer J)[]
  ? J extends Json
    ? CamelCaseKeys<J, D>[]
    : T
  : T;

export default CamelCaseKeys;
