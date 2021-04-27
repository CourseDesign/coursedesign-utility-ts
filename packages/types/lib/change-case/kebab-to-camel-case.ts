type KebabToCamelCase<S extends string> = S extends `${infer P1}-${infer P2}${infer P3}`
  ? `${Lowercase<P1>}${Uppercase<P2>}${KebabToCamelCase<P3>}`
  : Lowercase<S>;

export default KebabToCamelCase;
