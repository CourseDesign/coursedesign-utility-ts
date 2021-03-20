type Json =
  | string
  | number
  | boolean
  | null
  | undefined
  | JsonObject
  | JsonArray;

export interface JsonObject {
  [x: string]: Json;
}

export type JsonArray = Array<Json>;

export default Json;
