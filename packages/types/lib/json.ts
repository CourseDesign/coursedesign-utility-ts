type Json =
  | string
  | number
  | boolean
  | null
  | undefined
  | JsonObject
  | JsonArray;

interface JsonObject {
  [x: string]: Json;
}

type JsonArray = Array<Json>;

export default Json;
