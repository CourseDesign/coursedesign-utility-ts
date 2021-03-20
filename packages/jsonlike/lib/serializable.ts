import { Json } from "@course-design/types";

interface Serializable {
  toJSON(): Json;
}

export default Serializable;
