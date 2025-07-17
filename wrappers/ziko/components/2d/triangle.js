import { ZikoP5Shape2D } from "./p5shape2d.js"

class ZikoP5Triangle extends ZikoP5Shape2D{
  constructor(x1, y1, x2, y2, x3, y3){
    super([x1, y1, x2, y2, x3, y3])
  }
  __draw_geo__(p){
      p.triangle(
        ... this.cache.geometry.coordinates,
      );
  }
  posX(x1, x2, x3){
    this.cache.geometry.coordinates[0] = x1;
    this.cache.geometry.coordinates[2] = x2;
    this.cache.geometry.coordinates[4] = x3;
    return this;
  }
  posY(y1, y2, y3){
    this.cache.geometry.coordinates[1] = y1;
    this.cache.geometry.coordinates[3] = y2;
    this.cache.geometry.coordinates[5] = y3;
    return this;
  }
  translateX(dx1, dx2 = dx1, dx3 = dx1){
    this.cache.geometry.coordinates[0] += dx1;
    this.cache.geometry.coordinates[2] += dx2;
    this.cache.geometry.coordinates[4] += dx3;
    return this;
  }
  translateY(dy1, dy2 = dy1, dy3 = dy1){
    this.cache.geometry.coordinates[1] += dy1;
    this.cache.geometry.coordinates[3] += dy2;
    this.cache.geometry.coordinates[5] += dy3;
    return this;
  }
}
const triangle = (x1, y1, x2, y2, x3, y3) => new ZikoP5Triangle(x1, y1, x2, y2, x3, y3);
const Triangle = ({x1, y1, x2, y2, x3, y3} = {}) => new ZikoP5Triangle(x1, y1, x2, y2, x3, y3);
export{
  ZikoP5Triangle,
  triangle,
  Triangle
}