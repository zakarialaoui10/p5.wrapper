import { ZikoP5Canvas2D } from "../canvas/canvas2d";
export declare class ZikoP5Shape2D {
  constructor(x: number, y: number);

  readonly uuid: string;
  renderer: ZikoP5Canvas2D | null;

  x: number;
  y: number;

  posX(x: number): this;
  posY(y: number): this;

  translateX(dx: number): this;
  translateY(dy: number): this;

  rotateX(): this;
  rotateY(): this;
}
