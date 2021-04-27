import KebabToCamelCase from "./kebab-to-camel-case";
import PascalToCamelCase from "./pascal-to-camel-case";
import SnakeToCamelCase from "./snake-to-camel-case";

type IsCamelCase<S extends string> = S extends KebabToCamelCase<S> &
  PascalToCamelCase<S> &
  SnakeToCamelCase<S>
  ? true
  : false;

export default IsCamelCase;
