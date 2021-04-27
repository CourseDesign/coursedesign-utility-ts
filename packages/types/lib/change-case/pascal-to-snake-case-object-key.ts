import PascalToSnakeCase from "./pascal-to-snake-case";
import { JsonObject } from "../json";

type PascalToSnakeCaseKey<T> = T extends JsonObject
  ? {
      [K in keyof T as PascalToSnakeCase<K & string>]: PascalToSnakeCaseKey<
        T[K]
      >;
    }
  : T;

type PascalToSnakeCaseObjectKey<T extends JsonObject> = PascalToSnakeCaseKey<T>;

export default PascalToSnakeCaseObjectKey;
