import PascalToKebabCase from "./pascal-to-kebab-case";
import { JsonObject } from "../json";

type PascalToKebabCaseKeys<T> = T extends JsonObject
  ? {
      [K in keyof T as PascalToKebabCase<K & string>]: PascalToKebabCaseKeys<
        T[K]
      >;
    }
  : T extends (infer J)[]
  ? PascalToKebabCaseKeys<J>[]
  : T;

type PascalToKebabCaseObjectKeysNested<
  T extends JsonObject
> = PascalToKebabCaseKeys<T>;

export default PascalToKebabCaseObjectKeysNested;
