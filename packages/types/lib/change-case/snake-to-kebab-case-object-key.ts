import SnakeToKebabCase from "./snake-to-kebab-case";
import { JsonObject } from "../json";

type SnakeToKebabCaseKey<T> = T extends JsonObject
  ? {
      [K in keyof T as SnakeToKebabCase<K & string>]: SnakeToKebabCaseKey<T[K]>;
    }
  : T;

type SnakeToKebabCaseObjectKey<T extends JsonObject> = SnakeToKebabCaseKey<T>;

export default SnakeToKebabCaseObjectKey;
