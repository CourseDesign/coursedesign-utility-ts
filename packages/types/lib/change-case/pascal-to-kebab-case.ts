import CamelToKebabCase from "./camel-to-kebab-case";
import PascalToCamelCase from "./pascal-to-camel-case";

type PascalToKebabCase<S extends string> = CamelToKebabCase<PascalToCamelCase<S>>;

export default PascalToKebabCase;
