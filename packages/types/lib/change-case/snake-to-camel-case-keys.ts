import Json, { JsonObject } from "../json";
import Prev from "../prev";
import SnakeToCamelCase from "./snake-to-camel-case";

type SnakeToCamelCaseKeys<T extends Json, D extends number = -1> = [D] extends [
  0
]
  ? T
  : T extends JsonObject
  ? {
      [K in keyof T as SnakeToCamelCase<K & string>]: SnakeToCamelCaseKeys<
        T[K],
        Prev[D]
      >;
    }
  : T extends (infer J)[]
  ? J extends Json
    ? SnakeToCamelCaseKeys<J, D>[]
    : T
  : T;

export default SnakeToCamelCaseKeys;
