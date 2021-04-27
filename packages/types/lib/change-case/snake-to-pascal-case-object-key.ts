import SnakeToPascalCase from "./snake-to-pascal-case";
import { JsonObject } from "../json";

type SnakeToPascalCaseObjectKey<T> = T extends JsonObject
  ? {
      [K in keyof T as SnakeToPascalCase<
        K & string
      >]: SnakeToPascalCaseObjectKey<T[K]>;
    }
  : T;

export default SnakeToPascalCaseObjectKey;
