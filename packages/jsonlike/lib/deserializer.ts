import { Json } from "@course-design/types";

type Deserializer<T> = (value: Json) => T;

export default Deserializer;
