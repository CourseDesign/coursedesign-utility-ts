import PascalToKebabCase from "./pascal-to-kebab-case";
import { JsonObject } from "../json";

type PascalToKebabCaseKey<T> = T extends JsonObject
  ? {
      [K in keyof T as PascalToKebabCase<K & string>]: PascalToKebabCaseKey<
        T[K]
      >;
    }
  : T;

type PascalToKebabCaseObjectKey<T extends JsonObject> = PascalToKebabCaseKey<T>;

export default PascalToKebabCaseObjectKey;
