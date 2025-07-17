import { ZikoP5Shape2D } from "./p5shape2d.js"

class ZikoP5Square extends ZikoP5Shape2D{
  constructor(x, y, s, tr, tl, br, bl){
    super([x, y])
    Object.assign(this.cache.geometry,{
      s,
      tr, 
      tl, 
      br, 
      bl
    })
  }
  __draw_geo__(p){
      p.square(
        ...this.cache.geometry.coordinates,
        this.cache.geometry.s,
        this.cache.geometry.tr,
        this.cache.geometry.tl,
        this.cache.geometry.br,
        this.cache.geometry.bl,
      );
  }
}
const square = (x, y, s, {tr, tl, br, bl} = {}) => new ZikoP5Square(x, y, s, tr, tl, br, bl);
const Square = ({x, y, s, tr, tl, br, bl} = {}) => new ZikoP5Square(x, y, s, tr, tl, br, bl);
export{
  ZikoP5Square,
  square,
  Square
}