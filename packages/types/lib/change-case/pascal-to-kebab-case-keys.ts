import Json, { JsonObject } from "../json";
import Prev from "../prev";
import PascalToKebabCase from "./pascal-to-kebab-case";

type PascalToKebabCaseKeys<T extends Json, D extends number = -1> = [
  D
] extends [0]
  ? T
  : T extends JsonObject
  ? {
      [K in keyof T as PascalToKebabCase<K & string>]: PascalToKebabCaseKeys<
        T[K],
        Prev[D]
      >;
    }
  : T extends (infer J)[]
  ? J extends Json
    ? PascalToKebabCaseKeys<J, D>[]
    : T
  : T;

export default PascalToKebabCaseKeys;
