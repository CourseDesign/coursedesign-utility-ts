import KebabToPascalCase from "./kebab-to-pascal-case";
import { JsonObject } from "../json";

type KebabToPascalCaseKeys<T> = T extends JsonObject
  ? {
      [K in keyof T as KebabToPascalCase<K & string>]: KebabToPascalCaseKeys<
        T[K]
      >;
    }
  : T extends (infer J)[]
  ? KebabToPascalCaseKeys<J>[]
  : T;

type KebabToPascalCaseObjectKeysNested<
  T extends JsonObject
> = KebabToPascalCaseKeys<T>;

export default KebabToPascalCaseObjectKeysNested;
