import CamelToPascalCase from "./camel-to-pascal-case";
import { JsonObject } from "../json";

type CamelToPascalCaseKeys<T> = T extends JsonObject
  ? {
      [K in keyof T as CamelToPascalCase<K & string>]: CamelToPascalCaseKeys<
        T[K]
      >;
    }
  : T extends (infer J)[]
  ? CamelToPascalCaseKeys<J>[]
  : T;

type CamelToPascalCaseObjectKeysNested<
  T extends JsonObject
> = CamelToPascalCaseKeys<T>;

export default CamelToPascalCaseObjectKeysNested;
