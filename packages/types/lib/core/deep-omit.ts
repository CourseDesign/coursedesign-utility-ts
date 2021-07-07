import Paths from "./paths";
import DeepPick from "./deep-pick";
import Difference from "./difference";

type DeepOmit<T, K extends Paths<T, 5>> = Difference<T, DeepPick<T, K>>;

export default DeepOmit;
