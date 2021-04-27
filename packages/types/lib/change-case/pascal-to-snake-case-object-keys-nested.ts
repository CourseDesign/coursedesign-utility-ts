import PascalToSnakeCase from "./pascal-to-snake-case";
import { JsonObject } from "../json";

type PascalToSnakeCaseKeys<T> = T extends JsonObject
  ? {
      [K in keyof T as PascalToSnakeCase<K & string>]: PascalToSnakeCaseKeys<
        T[K]
      >;
    }
  : T extends (infer J)[]
  ? PascalToSnakeCaseKeys<J>[]
  : T;

type PascalToSnakeCaseObjectKeysNested<
  T extends JsonObject
> = PascalToSnakeCaseKeys<T>;

export default PascalToSnakeCaseObjectKeysNested;
