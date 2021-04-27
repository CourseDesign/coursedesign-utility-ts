import CamelToSnakeCase from "./camel-to-snake-case";
import KebabToSnakeCase from "./kebab-to-snake-case";
import PascalToSnakeCase from "./pascal-to-snake-case";

type IsSnakeCase<S extends string> = S extends CamelToSnakeCase<S> &
  KebabToSnakeCase<S> &
  PascalToSnakeCase<S>
  ? true
  : false;

export default IsSnakeCase;
