import SnakeToKebabCase from "./snake-to-kebab-case";
import { JsonObject } from "../json";

type SnakeToKebabCaseObjectKey<T> = T extends JsonObject
  ? {
      [K in keyof T as SnakeToKebabCase<K & string>]: SnakeToKebabCaseObjectKey<
        T[K]
      >;
    }
  : T;

export default SnakeToKebabCaseObjectKey;
