import CamelToSnakeCase from "./camel-to-snake-case";
import { JsonObject } from "../json";

type CamelToSnakeCaseKeys<T> = T extends JsonObject
  ? {
      [K in keyof T as CamelToSnakeCase<K & string>]: CamelToSnakeCaseKeys<T[K]>;
    }
  : T extends (infer J)[]
    ? CamelToSnakeCaseKeys<J>[]
    : T;

type CamelToSnakeCaseObjectKeysNested<T extends JsonObject> = CamelToSnakeCaseKeys<T>;

export default CamelToSnakeCaseObjectKeysNested;
