import FunctionDecorator from "./function-decorator";

// eslint-disable-next-line @typescript-eslint/ban-types
function joinFunctionDecorator<TFunction extends Function>(
  decorators: FunctionDecorator<TFunction>[]
): FunctionDecorator<TFunction> {
  return (target) => {
    return decorators.reduce((prev, cur) => {
      const result = cur(prev);
      if (result != null) {
        return result;
      }
      return prev;
    }, target);
  };
}

export default joinFunctionDecorator;
