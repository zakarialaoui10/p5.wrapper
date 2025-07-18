import { ZikoP5Shape3D } from "./p5shape3d.js";
import p5 from "p5";

class ZikoP5Box extends ZikoP5Shape3D{
  constructor(x, y, z, w, h, d){
    super([x, y, z])
    Object.assign(this.cache.geometry,{
      w,
      h, 
      d
    })
  }
  draw(p){
    const [x, y, z] = this.cache.geometry.coordinates;
    const {w, h, d} = this.cache.geometry
    // p.translate(x, y, z);
    p.box(w, h, d);
    // p.pop()
  }
}
const box = (x, y, z, w, h, d) => new ZikoP5Box(x, y, z, w, h, d);
const Box = ({x, y, z, w, h, d}={}) => new ZikoP5Box(x, y, z, w, h, d);
export{
  ZikoP5Box,
  box,
  Box
}