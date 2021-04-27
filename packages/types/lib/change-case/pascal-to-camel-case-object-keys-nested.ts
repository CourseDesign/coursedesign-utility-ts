import PascalToCamelCase from "./pascal-to-camel-case";
import { JsonObject } from "../json";

type PascalToCamelCaseKeys<T> = T extends JsonObject
  ? {
      [K in keyof T as PascalToCamelCase<K & string>]: PascalToCamelCaseKeys<
        T[K]
      >;
    }
  : T extends (infer J)[]
  ? PascalToCamelCaseKeys<J>[]
  : T;

type PascalToCamelCaseObjectKeysNested<
  T extends JsonObject
> = PascalToCamelCaseKeys<T>;

export default PascalToCamelCaseObjectKeysNested;
