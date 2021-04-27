import CamelToSnakeCase from "./camel-to-snake-case";
import { JsonObject } from "../json";

type CamelToSnakeCaseKey<T> = T extends JsonObject
  ? {
      [K in keyof T as CamelToSnakeCase<K & string>]: CamelToSnakeCaseKey<T[K]>;
    }
  : T;

type CamelToSnakeCaseObjectKey<T extends JsonObject> = CamelToSnakeCaseKey<T>;

export default CamelToSnakeCaseObjectKey;
