import CamelToKebabCase from "./camel-to-kebab-case";
import SnakeToCamelCase from "./snake-to-camel-case";

type SnakeToKebabCase<S extends string> = CamelToKebabCase<SnakeToCamelCase<S>>;

export default SnakeToKebabCase;
