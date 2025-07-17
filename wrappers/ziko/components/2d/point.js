import { ZikoP5Shape2D } from "./p5shape2d.js"

class ZikoP5Point extends ZikoP5Shape2D{
  constructor(x, y, z){
    super(x, y)
    Object.assign(this.cache.geometry,{
      z
    })
  }
  __draw_geo__(p){
      p.point(
        this.cache.geometry.x,
        this.cache.geometry.y,
        this.cache.geometry.z
      );
  }
}
const point = (x, y, z) => new ZikoP5Point(x, y, z);
const Point = ({x, y, z} = {}) => new ZikoP5Point(x, y, z);
export{
  ZikoP5Point,
  point,
  Point
}