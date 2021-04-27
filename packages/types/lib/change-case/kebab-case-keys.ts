import Json, { JsonObject } from "../json";
import Prev from "../prev";
import KebabCase from "./kebab-case";

type KebabCaseKeys<T extends Json, D extends number = -1> = [D] extends [0]
  ? T
  : T extends JsonObject
  ? {
      [K in keyof T as KebabCase<K & string>]: KebabCaseKeys<T[K], Prev[D]>;
    }
  : T extends (infer J)[]
  ? J extends Json
    ? KebabCaseKeys<J, D>[]
    : T
  : T;

export default KebabCaseKeys;
