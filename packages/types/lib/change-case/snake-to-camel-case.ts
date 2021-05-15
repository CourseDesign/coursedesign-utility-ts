type SnakeToCamelCase<S extends string> =
  S extends `${infer P1}_${infer P2}${infer P3}`
    ? `${P1}${Uppercase<P2>}${SnakeToCamelCase<P3>}`
    : S;

export default SnakeToCamelCase;
