import { _colors, _size } from "./theme";

export type ColorsTypes = keyof typeof _colors;
export type SizeTypes = keyof typeof _size;
export type Subset<T> = {
  [K in keyof T]?: T[K];
};
export type Keys<T> = { [K in T]: string };

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Subset<Keys<ColorsTypes>>;
    size: Subset<Keys<SizeTypes>>;
  }
}
