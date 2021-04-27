import CamelToKebabCase from "./camel-to-kebab-case";
import { JsonObject } from "../json";

type CamelToKebabCaseKey<T> = T extends JsonObject
  ? {
      [K in keyof T as CamelToKebabCase<K & string>]: CamelToKebabCaseKey<T[K]>;
    }
  : T;

type CamelToKebabCaseObjectKey<T extends JsonObject> = CamelToKebabCaseKey<T>;

export default CamelToKebabCaseObjectKey;
