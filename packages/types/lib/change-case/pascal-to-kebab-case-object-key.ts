import PascalToKebabCase from "./pascal-to-kebab-case";
import { JsonObject } from "../json";

type PascalToKebabCaseObjectKey<T> = T extends JsonObject
  ? {
      [K in keyof T as PascalToKebabCase<
        K & string
      >]: PascalToKebabCaseObjectKey<T[K]>;
    }
  : T;

export default PascalToKebabCaseObjectKey;
