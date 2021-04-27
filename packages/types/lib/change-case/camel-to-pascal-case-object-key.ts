import CamelToPascalCase from "./camel-to-pascal-case";
import { JsonObject } from "../json";

type CamelToPascalCaseObjectKey<T> = T extends JsonObject
  ? {
      [K in keyof T as CamelToPascalCase<
        K & string
      >]: CamelToPascalCaseObjectKey<T[K]>;
    }
  : T;

export default CamelToPascalCaseObjectKey;
