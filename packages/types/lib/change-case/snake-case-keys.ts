import Json, { JsonObject } from "../core/json";
import Prev from "../core/prev";
import SnakeCase from "./snake-case";

type SnakeCaseKeys<T extends Json, D extends number = -1> = [D] extends [0]
  ? T
  : T extends JsonObject
  ? {
      [K in keyof T as SnakeCase<K & string>]: SnakeCaseKeys<T[K], Prev[D]>;
    }
  : T extends (infer J)[]
  ? J extends Json
    ? SnakeCaseKeys<J, D>[]
    : T
  : T;

export default SnakeCaseKeys;
