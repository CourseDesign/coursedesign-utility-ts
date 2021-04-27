import SnakeToPascalCase from "./snake-to-pascal-case";
import { JsonObject } from "../json";

type SnakeToPascalCaseKeys<T> = T extends JsonObject
  ? {
      [K in keyof T as SnakeToPascalCase<K & string>]: SnakeToPascalCaseKeys<
        T[K]
      >;
    }
  : T extends (infer J)[]
  ? SnakeToPascalCaseKeys<J>[]
  : T;

type SnakeToPascalCaseObjectKeysNested<
  T extends JsonObject
> = SnakeToPascalCaseKeys<T>;

export default SnakeToPascalCaseObjectKeysNested;
