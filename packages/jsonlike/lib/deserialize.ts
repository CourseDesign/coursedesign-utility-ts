import Deserializable from "./deserializable";
import Deserializer from "./deserializer";

function deserialize<T>(deserializable: Deserializable<T>): Deserializer<T> {
  return (value) => deserializable.fromJSON(value);
}

export default deserialize;
