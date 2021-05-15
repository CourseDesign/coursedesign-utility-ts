type KebabToSnakeCase<S extends string> =
  S extends `${infer P1}-${infer P2}${infer P3}`
    ? `${P1}_${P2}${KebabToSnakeCase<P3>}`
    : S;

export default KebabToSnakeCase;
