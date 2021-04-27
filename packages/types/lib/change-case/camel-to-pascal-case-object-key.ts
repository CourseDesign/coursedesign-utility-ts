import CamelToPascalCase from "./camel-to-pascal-case";
import { JsonObject } from "../json";

type CamelToPascalCaseKey<T> = T extends JsonObject
  ? {
      [K in keyof T as CamelToPascalCase<K & string>]: CamelToPascalCaseKey<
        T[K]
      >;
    }
  : T;

type CamelToPascalCaseObjectKey<T extends JsonObject> = CamelToPascalCaseKey<T>;

export default CamelToPascalCaseObjectKey;
