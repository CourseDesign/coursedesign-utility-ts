import CamelToSnakeCase from "./camel-to-snake-case";
import PascalToSnakeCase from "./pascal-to-snake-case";
import KebabToSnakeCase from "./kebab-to-snake-case";

type SnakeCase<S extends string> = CamelToSnakeCase<
  PascalToSnakeCase<KebabToSnakeCase<S>>
>;

export default SnakeCase;
