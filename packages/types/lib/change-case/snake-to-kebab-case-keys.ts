import Json, { JsonObject } from "../core/json";
import Prev from "../core/prev";
import SnakeToKebabCase from "./snake-to-kebab-case";

type SnakeToKebabCaseKeys<T extends Json, D extends number = -1> = [D] extends [
  0
]
  ? T
  : T extends JsonObject
  ? {
      [K in keyof T as SnakeToKebabCase<K & string>]: SnakeToKebabCaseKeys<
        T[K],
        Prev[D]
      >;
    }
  : T extends (infer J)[]
  ? J extends Json
    ? SnakeToKebabCaseKeys<J, D>[]
    : T
  : T;

export default SnakeToKebabCaseKeys;
