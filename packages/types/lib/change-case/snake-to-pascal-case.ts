import SnakeToCamelCase from "./snake-to-camel-case";

type SnakeToPascalCase<S extends string> = Capitalize<SnakeToCamelCase<S>>

export default SnakeToPascalCase;
