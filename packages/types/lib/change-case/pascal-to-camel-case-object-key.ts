import PascalToCamelCase from "./pascal-to-camel-case";
import { JsonObject } from "../json";

type PascalToCamelCaseObjectKey<T> = T extends JsonObject
  ? {
      [K in keyof T as PascalToCamelCase<
        K & string
      >]: PascalToCamelCaseObjectKey<T[K]>;
    }
  : T;

export default PascalToCamelCaseObjectKey;
