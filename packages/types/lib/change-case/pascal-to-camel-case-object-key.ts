import PascalToCamelCase from "./pascal-to-camel-case";
import { JsonObject } from "../json";

type PascalToCamelCaseKey<T> = T extends JsonObject
  ? {
      [K in keyof T as PascalToCamelCase<K & string>]: PascalToCamelCaseKey<
        T[K]
      >;
    }
  : T;

type PascalToCamelCaseObjectKey<T extends JsonObject> = PascalToCamelCaseKey<T>;

export default PascalToCamelCaseObjectKey;
