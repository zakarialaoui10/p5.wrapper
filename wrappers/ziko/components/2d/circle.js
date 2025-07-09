// import {map, waitForUIElm} from "ziko"
import { ZikoP5Shape2D } from "./p5shape2d.js"

class ZikoP5Circle extends ZikoP5Shape2D{
  constructor(x, y, r){
    super(x, y)
    Object.assign(this.cache.geometry,{
      r
    })
  }
  __draw_geo__(p){
      p.circle(
        this.cache.geometry.x,
        this.cache.geometry.y,
        this.cache.geometry.r 
      );
  }
}
const P5Circle = ({x = 10, y = 10, r = 30}) => new ZikoP5Circle(x, y, r)
export{
  ZikoP5Circle,
  P5Circle
}