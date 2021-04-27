import Alphabet from "../alphabet";

type CamelToSnakeCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> & Alphabet
      ? "_"
      : ""}${Lowercase<T>}${CamelToSnakeCase<U>}`
  : S;

export default CamelToSnakeCase;
