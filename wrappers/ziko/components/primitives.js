import {map, waitForUIElm} from "ziko"

class ZikoP5Circle {
  constructor(x, y, r){
    this.x = x; 
    this.y = y;
    this.r = r;
  }
  draw(p){
    p.ellipse(
      this.x,
      this.y,
      this.r * 2
    );
  }
}
const P5Circle = (x, y, r) => new ZikoP5Circle(x, y, r)
const Circle = ({ x, y, r }) => (ctx) => {
  let width = ctx.canvas.width 
  let height = ctx.canvas.height
  console.log({widthBefore: width})
  const drawFn = (p) => {
    p.ellipse(
    map(x, -1, 1, 0, width),
    map(y, -1, 1, 0, height),
    r * 2);
  }
  ctx.register(drawFn);
  return drawFn;
};

export{
  Circle,
  P5Circle
}