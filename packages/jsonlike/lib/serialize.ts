import Serializable from "./serializable";
import Serializer from "./serializer";

function serialize<T extends Serializable>(): Serializer<T> {
  return (value) => value.toJSON();
}

export default serialize;
