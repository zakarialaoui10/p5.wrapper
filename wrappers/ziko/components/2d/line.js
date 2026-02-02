import { UIP5Shape2D } from "./p5shape2d.js"

class UIP5Line extends UIP5Shape2D{
  constructor(x1, y1, x2, y2){
    super([x1, y1, x2, y2])
  }
  __draw_geo__(p){
      p.line(
        ...this.cache.geometry.coordinates,
      );
  }
  posX(x1, x2){
    this.cache.geometry.coordinates[0] = x1;
    this.cache.geometry.coordinates[2] = x2;
    return this;
  }
  posY(y1, y2){
    this.cache.geometry.coordinates[1] = y1;
    this.cache.geometry.coordinates[3] = y2;
    return this;
  }
  translateX(dx1, dx2 = dx1){
    this.cache.geometry.coordinates[0] += dx1;
    this.cache.geometry.coordinates[2] += dx2;
    return this;
  }
  translateY(dy1, dy2 = dy1){
    this.cache.geometry.coordinates[1] += dy1;
    this.cache.geometry.coordinates[3] += dy2;
    return this;
  }
}
const line = (x1, y1, x2, y2) => new UIP5Line(x1, y1, x2, y2);
const Line = ({x1, y1, x2, y2} = {}) => new UIP5Line(x1, y1, x2, y2);
export{
  UIP5Line,
  line,
  Line
}