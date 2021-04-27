import CamelToSnakeCase from "./camel-to-snake-case";
import { JsonObject } from "../json";

type CamelToSnakeCaseObjectKey<T> = T extends JsonObject
  ? {
      [K in keyof T as CamelToSnakeCase<K & string>]: CamelToSnakeCaseObjectKey<
        T[K]
      >;
    }
  : T;

export default CamelToSnakeCaseObjectKey;
