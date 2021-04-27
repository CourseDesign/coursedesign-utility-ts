import Json, { JsonObject } from "../json";
import Prev from "../prev";
import KebabToSnakeCase from "./kebab-to-snake-case";

type KebabToSnakeCaseKeys<T extends Json, D extends number = -1> = [D] extends [
  0
]
  ? T
  : T extends JsonObject
  ? {
      [K in keyof T as KebabToSnakeCase<K & string>]: KebabToSnakeCaseKeys<
        T[K],
        Prev[D]
      >;
    }
  : T extends (infer J)[]
  ? J extends Json
    ? KebabToSnakeCaseKeys<J, D>[]
    : T
  : T;

export default KebabToSnakeCaseKeys;
