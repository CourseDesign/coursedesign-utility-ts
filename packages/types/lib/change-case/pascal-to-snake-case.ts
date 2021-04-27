import CamelToSnakeCase from "./camel-to-snake-case";
import PascalToCamelCase from "./pascal-to-camel-case";

type PascalToSnakeCase<S extends string> = CamelToSnakeCase<
  PascalToCamelCase<S>
>;

export default PascalToSnakeCase;
