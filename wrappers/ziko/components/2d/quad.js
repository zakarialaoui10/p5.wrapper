import { UIP5Shape2D } from "./p5shape2d.js"

class UIP5Quad extends UIP5Shape2D{
  constructor(x1, y1, x2, y2, x3, y3, x4, y4){
    super([x1, y1, x2, y2, x3, y3, x4, y4])
  }
  __draw_geo__(p){
      p.quad(
        ... this.cache.geometry.coordinates,
      );
  }
  posX(x1, x2, x3, x4){
    this.cache.geometry.coordinates[0] = x1;
    this.cache.geometry.coordinates[2] = x2;
    this.cache.geometry.coordinates[4] = x3;
    this.cache.geometry.coordinates[6] = x4;
    return this;
  }
  posY(y1, y2, y3, y4){
    this.cache.geometry.coordinates[1] = y1;
    this.cache.geometry.coordinates[3] = y2;
    this.cache.geometry.coordinates[5] = y3;
    this.cache.geometry.coordinates[7] = y4;
    return this;
  }
  translateX(dx1, dx2 = dx1, dx3 = dx1, dx4 = dx1){
    this.cache.geometry.coordinates[0] += dx1;
    this.cache.geometry.coordinates[2] += dx2;
    this.cache.geometry.coordinates[4] += dx3;
    this.cache.geometry.coordinates[6] += dx4;
    return this;
  }
  translateY(dy1, dy2 = dy1, dy3 = dy1){
    this.cache.geometry.coordinates[1] += dy1;
    this.cache.geometry.coordinates[3] += dy2;
    this.cache.geometry.coordinates[5] += dy3;
    this.cache.geometry.coordinates[7] += dy4;
    return this;
  }
}
const quad = (x1, y1, x2, y2, x3, y3, x4, y4) => new UIP5Quad(x1, y1, x2, y2, x3, y3, x4, y4);
const Quad = ({x1, y1, x2, y2, x3, y3, x4, y4} = {}) => new UIP5Quad(x1, y1, x2, y2, x3, y3, x4, y4);
export{
  UIP5Quad,
  quad,
  Quad
}