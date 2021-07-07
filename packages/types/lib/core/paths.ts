import Join from "./join";
import Prev from "./prev";
import Primitive from "./primitive";

type Paths<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends Primitive
  ? never
  : // eslint-disable-next-line @typescript-eslint/ban-types
  T extends object
  ? {
      [K in keyof T]-?: K extends string | number
        ? `${K}` | Join<K, Paths<T[K], Prev[D]>>
        : never;
    }[keyof T]
  : "";

export default Paths;
