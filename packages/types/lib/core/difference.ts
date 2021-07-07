/* eslint-disable @typescript-eslint/ban-types */

type RemoveUnused<T> = T extends object
  ? {
      [P in keyof T as [T[P]] extends [never]
        ? never
        : T[P] extends undefined
        ? never
        : P]: T[P];
    }
  : never;

type Difference<T, U> = T extends object
  ? U extends object
    ? RemoveUnused<
        {
          [P in keyof T]: P extends Extract<keyof T, keyof U>
            ? U[P] extends T[P]
              ? never
              : Difference<T[P], U[P]>
            : T[P];
        }
      >
    : never
  : never;

export default Difference;
