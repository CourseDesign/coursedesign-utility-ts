import SnakeToCamelCase from "./snake-to-camel-case";
import { JsonObject } from "../json";

type SnakeToCamelCaseKeys<T> = T extends JsonObject
  ? {
      [K in keyof T as SnakeToCamelCase<K & string>]: SnakeToCamelCaseKeys<
        T[K]
      >;
    }
  : T extends (infer J)[]
  ? SnakeToCamelCaseKeys<J>[]
  : T;

type SnakeToCamelCaseObjectKeysNested<
  T extends JsonObject
> = SnakeToCamelCaseKeys<T>;

export default SnakeToCamelCaseObjectKeysNested;
