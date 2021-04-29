// eslint-disable-next-line @typescript-eslint/ban-types
type FunctionDecorator<TFunction extends Function> = (
  target: TFunction
) => TFunction | void;

export default FunctionDecorator;
