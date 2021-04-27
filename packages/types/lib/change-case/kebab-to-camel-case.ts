type KebabToCamelCase<
  S extends string
> = S extends `${infer P1}-${infer P2}${infer P3}`
  ? `${P1}${Uppercase<P2>}${KebabToCamelCase<P3>}`
  : S;

export default KebabToCamelCase;
