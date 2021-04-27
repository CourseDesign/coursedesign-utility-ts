import CamelToKebabCase from "./camel-to-kebab-case";
import { JsonObject } from "../json";

type CamelToKebabCaseObjectKey<T> = T extends JsonObject
  ? {
      [K in keyof T as CamelToKebabCase<K & string>]: CamelToKebabCaseObjectKey<
        T[K]
      >;
    }
  : T;

export default CamelToKebabCaseObjectKey;
