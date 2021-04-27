import CamelToKebabCase from "./camel-to-kebab-case";
import { JsonObject } from "../json";

type CamelToKebabCaseKeys<T> = T extends JsonObject
  ? {
      [K in keyof T as CamelToKebabCase<K & string>]: CamelToKebabCaseKeys<
        T[K]
      >;
    }
  : T extends (infer J)[]
  ? CamelToKebabCaseKeys<J>[]
  : T;

type CamelToKebabCaseObjectKeysNested<
  T extends JsonObject
> = CamelToKebabCaseKeys<T>;

export default CamelToKebabCaseObjectKeysNested;
