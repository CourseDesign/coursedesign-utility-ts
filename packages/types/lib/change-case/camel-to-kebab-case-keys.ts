import Json, { JsonObject } from "../json";
import Prev from "../prev";
import CamelToKebabCase from "./camel-to-kebab-case";

type CamelToKebabCaseKeys<T extends Json, D extends number = -1> = [D] extends [
  0
]
  ? T
  : T extends JsonObject
  ? {
      [K in keyof T as CamelToKebabCase<K & string>]: CamelToKebabCaseKeys<
        T[K],
        Prev[D]
      >;
    }
  : T extends (infer J)[]
  ? J extends Json
    ? CamelToKebabCaseKeys<J, D>[]
    : T
  : T;

export default CamelToKebabCaseKeys;
