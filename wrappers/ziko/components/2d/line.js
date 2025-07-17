import { ZikoP5Shape2D } from "./p5shape2d.js"

class ZikoP5Line extends ZikoP5Shape2D{
  constructor(x, y, x1, y1){
    super()
    console.log(y1)
    Object.assign(this.cache.geometry,{
        x, 
        y,
        x1,
        y1
    })
  }
  __draw_geo__(p){
      p.line(
        this.cache.geometry.x,
        this.cache.geometry.y,
        this.cache.geometry.x1,
        this.cache.geometry.y1,
      );
  }
  posX(x0, x1){
    this.cache.geometry.x = x0;
    this.cache.geometry.x1 = x1;
    return this;
  }
  posY(y0, y1){
    this.cache.geometry.y = y0;
    this.cache.geometry.y1 = y1;
    return this;
  }
  translateX(dx0, dx1 = dx0){
    this.cache.geometry.x += dx0;
    this.cache.geometry.x1 += dx1;
    return this;
  }
  translateY(dy0, dy1 = dy0){
    this.cache.geometry.y += dy0;
    this.cache.geometry.y1 += dy1;
    return this;
  }
}
const line = (x0, y0, x1, y1) => new ZikoP5Line(x0, y0, x1, y1);
const Line = ({x0, y0, x1, y1} = {}) => new ZikoP5Line(x0, y0, x1, y1);
export{
  ZikoP5Line,
  line,
  Line
}