type CamelToKebabCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? "-" : ""}${Lowercase<T>}${CamelToKebabCase<U>}`
  : S;

export default CamelToKebabCase;
