// eslint-disable-next-line @typescript-eslint/no-unused-vars
type RootPaths<K extends string> = K extends `${infer P1}.${infer P2}` ? P1 : K;

export default RootPaths;
