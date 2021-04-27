import SnakeToPascalCase from "./snake-to-pascal-case";
import { JsonObject } from "../json";

type SnakeToPascalCaseKey<T> = T extends JsonObject
  ? {
      [K in keyof T as SnakeToPascalCase<K & string>]: SnakeToPascalCaseKey<
        T[K]
      >;
    }
  : T;

type SnakeToPascalCaseObjectKey<T extends JsonObject> = SnakeToPascalCaseKey<T>;

export default SnakeToPascalCaseObjectKey;
