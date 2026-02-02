import { UIP5Shape2D } from "./p5shape2d.js"

class UIP5Ellipse extends UIP5Shape2D{
  constructor(x, y, r1, r2){
    super(x, y)
    Object.assign(this.cache.geometry,{
      r1,
      r2
    })
  }
  setRadius(r1, r2){
    this.cache.geometry.r1 = r1;
    this.cache.geometry.r2 = r2;
    return this;
  }
  __draw_geo__(p){
      p.ellipse(
        this.cache.geometry.x,
        this.cache.geometry.y,
        this.cache.geometry.r1,
        this.cache.geometry.r2,
      );
  }
}
const ellipse = (x, y, r1, r2) => new UIP5Ellipse(x, y, r1, r2);
const Ellipse = ({x, y, r1, r2} = {}) => new UIP5Ellipse(x, y, r1, r2);
export{
  UIP5Ellipse,
  ellipse,
  Ellipse
}