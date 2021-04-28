import { Nullish } from "@course-design/types";
import Deserializable from "./deserializable";

function isDeserializable<T>(
  value: Deserializable<T> | unknown
): value is Deserializable<T> {
  return (
    typeof (value as Partial<Deserializable<T>> | Nullish)?.fromJSON ===
    "function"
  );
}

export default isDeserializable;
