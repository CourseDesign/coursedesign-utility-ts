import SnakeToKebabCase from "./snake-to-kebab-case";
import CamelToPascalCase from "./camel-to-pascal-case";
import KebabToPascalCase from "./kebab-to-pascal-case";

type IsPascalCase<S extends string> = S extends CamelToPascalCase<S> &
  KebabToPascalCase<S> &
  SnakeToKebabCase<S>
  ? true
  : false;

export default IsPascalCase;
