import PascalToSnakeCase from "./pascal-to-snake-case";
import { JsonObject } from "../json";

type PascalToSnakeCaseObjectKey<T> = T extends JsonObject
  ? {
      [K in keyof T as PascalToSnakeCase<
        K & string
      >]: PascalToSnakeCaseObjectKey<T[K]>;
    }
  : T;

export default PascalToSnakeCaseObjectKey;
