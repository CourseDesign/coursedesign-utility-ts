import KebabToPascalCase from "./kebab-to-pascal-case";
import { JsonObject } from "../json";

type KebabToPascalCaseKey<T> = T extends JsonObject
  ? {
      [K in keyof T as KebabToPascalCase<K & string>]: KebabToPascalCaseKey<
        T[K]
      >;
    }
  : T;

type KebabToPascalCaseObjectKey<T extends JsonObject> = KebabToPascalCaseKey<T>;

export default KebabToPascalCaseObjectKey;
