import { ZikoUIElement } from "ziko";
import { ZikoP5Shape2D } from "../components/p5shape2d.js"
import type p5 from "p5";

export interface ZikoP5Canvas2D extends ZikoUIElement {
  readonly iter: number;
  readonly xMin: number;
  readonly xMax: number;
  readonly yMin: number;
  readonly yMax: number;

  view(
    xMin?: number,
    yMin?: number,
    xMax?: number,
    yMax?: number
  ): this;

  setCustomLoopCallback(
    callback: (canvas: ZikoP5Canvas2D) => void
  ): this;

  append(...items: ZikoP5Shape2D[]): this;

  remove(...items: ZikoP5Shape2D[]): this;

  p5: p5;
  items: ZikoP5Shape2D[];
}

export declare class ZikoP5Canvas2D extends ZikoUIElement {
  constructor(...items: ZikoP5Shape2D[]);
}

export declare function P5Canvas2D(
  ...items: ZikoP5Shape2D[]
): ZikoP5Canvas2D;
