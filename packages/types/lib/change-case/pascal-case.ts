import CamelToPascalCase from "./camel-to-pascal-case";
import SnakeToPascalCase from "./snake-to-pascal-case";
import KebabToPascalCase from "./kebab-to-pascal-case";

type PascalCase<S extends string> = CamelToPascalCase<
  SnakeToPascalCase<KebabToPascalCase<S>>
>;

export default PascalCase;
