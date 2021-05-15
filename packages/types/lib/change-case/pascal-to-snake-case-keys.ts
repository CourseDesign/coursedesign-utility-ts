import Json, { JsonObject } from "../core/json";
import Prev from "../core/prev";
import PascalToSnakeCase from "./pascal-to-snake-case";

type PascalToSnakeCaseKeys<T extends Json, D extends number = -1> = [
  D
] extends [0]
  ? T
  : T extends JsonObject
  ? {
      [K in keyof T as PascalToSnakeCase<K & string>]: PascalToSnakeCaseKeys<
        T[K],
        Prev[D]
      >;
    }
  : T extends (infer J)[]
  ? J extends Json
    ? PascalToSnakeCaseKeys<J, D>[]
    : T
  : T;

export default PascalToSnakeCaseKeys;
