import CamelToKebabCase from "./camel-to-kebab-case";
import PascalToKebabCase from "./pascal-to-kebab-case";
import SnakeToKebabCase from "./snake-to-kebab-case";

type IsKebabCase<S extends string> = S extends CamelToKebabCase<S> &
  PascalToKebabCase<S> &
  SnakeToKebabCase<S>
  ? true
  : false;

export default IsKebabCase;
