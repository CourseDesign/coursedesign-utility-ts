import CamelToSnakeCase from "./camel-to-snake-case";
import KebabToCamelCase from "./kebab-to-camel-case";

type KebabToSnakeCase<S extends string> = CamelToSnakeCase<KebabToCamelCase<S>>;

export default KebabToSnakeCase;
