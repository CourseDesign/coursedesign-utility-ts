import CamelToSnakeCase from "./camel-to-snake-case";

type PascalToSnakeCase<S extends string> = CamelToSnakeCase<Uncapitalize<S>>;

export default PascalToSnakeCase;
