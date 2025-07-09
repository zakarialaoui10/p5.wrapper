import { ZikoP5Shape3D } from "./p5shape3d.js"

class ZikoP5Box extends ZikoP5Shape3D{
  constructor(x, y, z){
    super(x, y)
    Object.assign(this.cache,{
      z
    })
  }
  draw(p){
    p.box(20);
  }
}
const P5Box = ({x = 10, y = 10, z = 30}={}) => new ZikoP5Box(x, y, z);
export{
  ZikoP5Box,
  P5Box
}