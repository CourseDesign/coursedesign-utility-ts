import { Json, JsonObject, Prev } from "../core";
import SnakeToPascalCase from "./snake-to-pascal-case";

type SnakeToPascalCaseKeys<T extends Json, D extends number = -1> = [
  D
] extends [0]
  ? T
  : T extends JsonObject
  ? {
      [K in keyof T as SnakeToPascalCase<K & string>]: SnakeToPascalCaseKeys<
        T[K],
        Prev[D]
      >;
    }
  : T extends (infer J)[]
  ? J extends Json
    ? SnakeToPascalCaseKeys<J, D>[]
    : T
  : T;

export default SnakeToPascalCaseKeys;
