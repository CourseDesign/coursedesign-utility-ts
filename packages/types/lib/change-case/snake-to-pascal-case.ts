ㅊimport SnakeToCamelCase from "./snake-to-camel-case";
import CamelToPascalCase from "./camel-to-pascal-case";

type SnakeToPascalCase<S extends string> = CamelToPascalCase<
  SnakeToCamelCase<S>
>;

export default SnakeToPascalCase;
