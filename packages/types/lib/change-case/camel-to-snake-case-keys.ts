import { Json, JsonObject, Prev } from "../core";
import CamelToSnakeCase from "./camel-to-snake-case";

type CamelToSnakeCaseKeys<T extends Json, D extends number = -1> = [D] extends [
  0
]
  ? T
  : T extends JsonObject
  ? {
      [K in keyof T as CamelToSnakeCase<K & string>]: CamelToSnakeCaseKeys<
        T[K],
        Prev[D]
      >;
    }
  : T extends (infer J)[]
  ? J extends Json
    ? CamelToSnakeCaseKeys<J, D>[]
    : T
  : T;

export default CamelToSnakeCaseKeys;
