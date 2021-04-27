import SnakeToCamelCase from "./snake-to-camel-case";
import PascalToCamelCase from "./pascal-to-camel-case";
import KebabToCamelCase from "./kebab-to-camel-case";

type CamelCase<S extends string> = PascalToCamelCase<
  SnakeToCamelCase<KebabToCamelCase<S>>
>;

export default CamelCase;
