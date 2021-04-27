import PascalToKebabCase from "./pascal-to-kebab-case";
import CamelToKebabCase from "./camel-to-kebab-case";
import SnakeToKebabCase from "./snake-to-kebab-case";

type KebabCase<S extends string> = CamelToKebabCase<
  PascalToKebabCase<SnakeToKebabCase<S>>
>;

export default KebabCase;
