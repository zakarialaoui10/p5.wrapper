import { ZikoP5Shape3D } from "./p5shape3d.js";

class ZikoP5Box extends ZikoP5Shape3D{
  constructor(x, y, z, w, h, d){
    super(x, y, z)
    Object.assign(this.cache,{
      w,
      h, 
      d
    })
  }
  draw(p){
    p.push();
    p.translate(this.cache.x, this.cache.y, this.cache.z);
    p.box(this.cache.w, this.cache.h, this.cache.d);
    p.pop()
  }
}
const box = (x, y, z, w, h, d) => new ZikoP5Box(x, y, z, w, h, d);
const Box = ({x, y, z, w, h, d}={}) => new ZikoP5Box(x, y, z, w, h, d);
export{
  ZikoP5Box,
  box,
  Box
}