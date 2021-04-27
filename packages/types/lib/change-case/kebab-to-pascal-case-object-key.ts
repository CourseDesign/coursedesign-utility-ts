import KebabToPascalCase from "./kebab-to-pascal-case";
import { JsonObject } from "../json";

type KebabToPascalCaseObjectKey<T> = T extends JsonObject
  ? {
      [K in keyof T as KebabToPascalCase<
        K & string
      >]: KebabToPascalCaseObjectKey<T[K]>;
    }
  : T;

export default KebabToPascalCaseObjectKey;
