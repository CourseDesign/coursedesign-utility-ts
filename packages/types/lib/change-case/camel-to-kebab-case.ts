import Alphabet from "../alphabet";

type CamelToKebabCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T>
      ? T extends Alphabet
        ? "-"
        : ""
      : ""}${Lowercase<T>}${CamelToKebabCase<U>}`
  : S;

export default CamelToKebabCase;
