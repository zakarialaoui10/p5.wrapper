import { UIP5Canvas } from "./canvas.js";
import { Matrix } from "ziko/math"
// console.log(Matrix)
class UIP5Canvas2D extends UIP5Canvas{
  constructor(...items){
    super("p2d", mode_dependent_drawing_callback, ...items)
    Object.assign(this.cache,{
      transormationMatrix : new Matrix([[0,0],[0,0],[0,0]])
    })
  }
  view(xMin = 0, yMin = 0, xMax = this.width, yMax = this.height){
    this.cache.xMax = xMin;
    this.cache.xMax = xMax;
    this.cache.yMin = yMin; 
    this.cache.yMax = yMax;
    const sx = this.width / (xMax - xMin);
    const sy = this.height / (yMax - yMin);
    const tx = -xMin * sx;
    const ty = -yMin * sy;
    this.cache.transormationMatrix[0][0] = sx;
    this.cache.transormationMatrix[0][1] = 0;
    this.cache.transormationMatrix[1][0] = 0;
    this.cache.transormationMatrix[1][1] = -sy;
    this.cache.transormationMatrix[2][0] = tx;
    this.cache.transormationMatrix[2][1] = ty;
    return this;
  }
}
function mode_dependent_drawing_callback(p){
    p.applyMatrix(this.cache.transormationMatrix.arr.flat(1))
}
const Canvas2D = (...items) => new UIP5Canvas2D(...items);
export { UIP5Canvas2D, Canvas2D };
