import KebabToCamelCase from "./kebab-to-camel-case";
import CamelToPascalCase from "./camel-to-pascal-case";

type KebabToPascalCase<S extends string> = CamelToPascalCase<KebabToCamelCase<S>>;

export default KebabToPascalCase;
