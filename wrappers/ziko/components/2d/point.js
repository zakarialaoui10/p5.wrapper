import { UIP5Shape2D } from "./p5shape2d.js"

class UIP5Point extends UIP5Shape2D{
  constructor(x, y, z){
    super([x, y])
    Object.assign(this.cache.geometry,{
      z
    })
  }
  __draw_geo__(p){
      p.point(
        ...this.cache.coordinate,
        this.cache.geometry.z
      );
  }
}
const point = (x, y, z) => new UIP5Point(x, y, z);
const Point = ({x, y, z} = {}) => new UIP5Point(x, y, z);
export{
  UIP5Point,
  point,
  Point
}