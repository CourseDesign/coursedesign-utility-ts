type SnakeToKebabCase<
  S extends string
> = S extends `${infer P1}_${infer P2}${infer P3}`
  ? `${P1}-${P2}${SnakeToKebabCase<P3>}`
  : S;

export default SnakeToKebabCase;
