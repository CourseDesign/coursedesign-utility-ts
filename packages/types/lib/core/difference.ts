/* eslint-disable @typescript-eslint/ban-types */

type Difference<T, U> = T extends object
  ? U extends object
    ? {
        [P in keyof T]: P extends Extract<keyof T, keyof U>
          ? Difference<T[P], U[P]>
          : T[P];
      }
    : never
  : never;

export default Difference;
