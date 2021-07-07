// eslint-disable-next-line @typescript-eslint/no-unused-vars
type NodePaths<K extends string> = K extends `${infer P1}.${infer P2}`
  ? P2
  : never;

export default NodePaths;
