import Paths from "./paths";
import RootPaths from "./root-paths";
import NodePaths from "./node-paths";

// eslint-disable-next-line @typescript-eslint/ban-types
type InternalDeepPick<T, K extends string> = T extends object
  ? {
      [P in RootPaths<K> & keyof T]: [NodePaths<K>] extends [never]
        ? T[P]
        : InternalDeepPick<T[P], NodePaths<K>>;
    }
  : T;

type DeepPick<T, K extends Paths<T, 5>> = InternalDeepPick<T, K>;

export default DeepPick;
