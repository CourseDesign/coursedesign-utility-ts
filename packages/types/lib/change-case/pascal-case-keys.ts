import Json, { JsonObject } from "../core/json";
import Prev from "../core/prev";
import PascalCase from "./pascal-case";

type PascalCaseKeys<T extends Json, D extends number = -1> = [D] extends [0]
  ? T
  : T extends JsonObject
  ? {
      [K in keyof T as PascalCase<K & string>]: PascalCaseKeys<T[K], Prev[D]>;
    }
  : T extends (infer J)[]
  ? J extends Json
    ? PascalCaseKeys<J, D>[]
    : T
  : T;

export default PascalCaseKeys;
