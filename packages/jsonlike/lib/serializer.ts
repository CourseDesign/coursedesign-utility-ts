import { Json } from "@course-design/types";

type Serializer<T> = (value: T) => Json;

export default Serializer;
