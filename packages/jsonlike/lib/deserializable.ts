import { Json } from "@course-design/types";

interface Deserializable<T> {
  fromJSON(json: Json): T;
}

export default Deserializable;
