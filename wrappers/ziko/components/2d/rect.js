import { ZikoP5Shape2D } from "./p5shape2d.js"

class ZikoP5Rect extends ZikoP5Shape2D{
  constructor(x, y, w, h, tr, tl, br, bl){
    super([x, y])
    Object.assign(this.cache.geometry,{
      w,
      h,
      tr, 
      tl, 
      br, 
      bl
    })
  }
  __draw_geo__(p){
      p.rect(
        ...this.cache.geometry.coordinates,
        this.cache.geometry.w,
        this.cache.geometry.h,
        this.cache.geometry.tr,
        this.cache.geometry.tl,
        this.cache.geometry.br,
        this.cache.geometry.bl,
      );
  }
}
const rect = (x, y, w, h, {tr, tl, br, bl} = {}) => new ZikoP5Rect(x, y, w, h, tr, tl, br, bl);
const Rect = ({x, y, w, h, tr, tl, br, bl} = {}) => new ZikoP5Rect(x, y, w, h, tr, tl, br, bl);
export{
  ZikoP5Rect,
  rect,
  Rect
}