type PascalToCamelCase<S extends string> = S extends Uppercase<S>
  ? S
  : Uncapitalize<S>;

export default PascalToCamelCase;
