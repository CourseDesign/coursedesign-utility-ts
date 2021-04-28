import { Nullish } from "@course-design/types";
import Serializable from "./serializable";

function isSerializable(value: Serializable | unknown): value is Serializable {
  return (
    typeof (value as Partial<Serializable> | Nullish)?.toJSON === "function"
  );
}

export default isSerializable;
