/* eslint-disable @typescript-eslint/ban-types */

import Equals from "./equals";

type RemoveUnused<T> = T extends object
  ? {
      [P in keyof T as Equals<T[P], never> extends true
        ? never
        : Equals<T[P], undefined> extends true
        ? never
        : P]: T[P];
    }
  : never;

type Difference<T, U> = T extends object
  ? U extends object
    ? RemoveUnused<
        {
          [P in keyof T]: P extends Extract<keyof T, keyof U>
            ? Equals<T[P], U[P]> extends true
              ? never
              : Difference<T[P], U[P]>
            : T[P];
        }
      >
    : never
  : never;

export default Difference;
