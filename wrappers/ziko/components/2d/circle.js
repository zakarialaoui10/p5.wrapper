import { ZikoP5Shape2D } from "./p5shape2d.js"

class ZikoP5Circle extends ZikoP5Shape2D{
  constructor(x, y, r){
    super([x, y])
    Object.assign(this.cache.geometry,{
      r
    })
  }
  setRadius(r){
    this.cache.geometry.r = r;
    return this;
  }
  __draw_geo__(p){
      p.circle(
        ...this.cache.geometry.coordinates,
        this.cache.geometry.r 
      );
  }
}
const circle = (x, y, r) => new ZikoP5Circle(x, y, r);
const Circle = ({x, y, r} = {}) => new ZikoP5Circle(x, y, r);
export{
  ZikoP5Circle,
  circle,
  Circle
}