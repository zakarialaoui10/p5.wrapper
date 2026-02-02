import { UIP5Shape2D } from "./p5shape2d.js"

class UIP5Arc extends UIP5Shape2D{
  constructor(x, y, w, h){
    super(x, y)
    Object.assign(this.cache.geometry,{
      w, 
      h
    })
  }
//   setRadius(r){
//     this.cache.geometry.r = r;
//     return this;
//   }
  __draw_geo__(p){
      p.arc(
        this.cache.geometry.x,
        this.cache.geometry.y,
        this.cache.geometry.w,
        this.cache.geometry.y,
      );
  }
}
const arc = (x, y, w, h) => new UIP5Arc(x, y, w, h);
const Arc = ({x, y, w, h} = {}) => new UIP5Arc(x, y, w, h);
export{
  UIP5Arc,
  arc,
  Arc
}