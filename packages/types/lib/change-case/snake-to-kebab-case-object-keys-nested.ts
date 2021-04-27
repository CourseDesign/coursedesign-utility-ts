import SnakeToKebabCase from "./snake-to-kebab-case";
import { JsonObject } from "../json";

type SnakeToKebabCaseKeys<T> = T extends JsonObject
  ? {
      [K in keyof T as SnakeToKebabCase<K & string>]: SnakeToKebabCaseKeys<
        T[K]
      >;
    }
  : T extends (infer J)[]
  ? SnakeToKebabCaseKeys<J>[]
  : T;

type SnakeToKebabCaseObjectKeysNested<
  T extends JsonObject
> = SnakeToKebabCaseKeys<T>;

export default SnakeToKebabCaseObjectKeysNested;
