import FunctionDecorator from "./function-decorator";
import joinFunctionDecorator from "./join-function-decorator";

// eslint-disable-next-line @typescript-eslint/ban-types
function decorateFunction<TFunction extends Function>(
  decorators: FunctionDecorator<TFunction> | FunctionDecorator<TFunction>[],
  target: TFunction
): TFunction {
  const decorator =
    decorators instanceof Array
      ? joinFunctionDecorator(decorators)
      : decorators;

  const result = decorator(target);
  if (result != null) {
    return result;
  }
  return target;
}

export default decorateFunction;
