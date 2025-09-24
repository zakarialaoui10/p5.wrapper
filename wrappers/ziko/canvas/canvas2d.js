// import { UIElement, waitForUIElm, cos, sin, PI, Matrix } from "ziko";
// import p5  from "p5";
// class ZikoP5Canvas2D extends UIElement {
//   constructor(...items) {
//     super("div");
//     Object.assign(this.cache,{
//         iter: 0,
//         loop_callback : null,
//         isPaused : false,
//         transormationMatrix : new Matrix([[0,0],[0,0],[0,0]])
//     })
//     this.size("300px","300px")
//     this.style({
//         outline : "1px red solid",  
//     })
//     this.items = [];
//     this.p5 = new p5((p) => {
//       p.setup = () => {
//         p.createCanvas(this.width, this.height).parent(
//           this.element,
//         );
//         p.frameRate(30);
//       };
//       p.draw = () => {
//         p.clear();
//         // this.view(-100, -100, 100, 100)
//         p.applyMatrix(this.cache.transormationMatrix.arr.flat(1))
//         this.items.forEach((shape) => {
//             shape.maintain(p)
//             shape.draw(p)
//             this.cache.loop_callback?.call(null, this);
//             // shape.posX(150+100*cos(this.iter*PI/50))
//             // shape.posY(150+100*sin(this.iter*PI/50))
//         });
//         this.cache.iter += 1;
//       };
//     });
//     this.append(...items)
//   }
//   get iter(){
//     return this.cache.iter;
//   }
//   get sf(){
//     return this.cache.scaleFactor;
//   }
//   get xMin(){
//     return this.cache.xMin;
//   }
//   get xMax(){
//     return this.cache.xMax;
//   }
//   get yMin(){
//     return this.cache.yMin;
//   }
//   get yMax(){
//     return this.cache.yMax;
//   }
//   get fps(){
//     return this.p5.getFrameRate();
//   }
//   get isPaused(){
//     return this.cache.isPaused;
//   }
//   view(xMin = 0, yMin = 0, xMax = this.width, yMax = this.height){
//     this.cache.xMax = xMin;
//     this.cache.xMax = xMax;
//     this.cache.yMin = yMin; 
//     this.cache.yMax = yMax;
//     const sx = this.width / (xMax - xMin);
//     const sy = this.height / (yMax - yMin);
//     const tx = -xMin * sx;
//     const ty = -yMin * sy;
//     this.cache.transormationMatrix.set(0, 0, sx);
//     this.cache.transormationMatrix.set(0, 1, 0);
//     this.cache.transormationMatrix.set(1, 0, 0);
//     this.cache.transormationMatrix.set(1, 1, sy);
//     this.cache.transormationMatrix.set(2, 0, tx);
//     this.cache.transormationMatrix.set(2, 1, ty);
//     // this.cache.scaleFactor = Math.min(sx, sy);
//     // console.log({sx, sy, tx, ty})
//     // this?.p5?.resetMatrix();
//     // this?.p5?.applyMatrix(sx, 0, 0, sy, tx, ty);
//     return this;
//   }
//   setCustomLoopCallback(callback){
//     this.cache.loop_callback = callback;
//     return this;
//   }
//   frameRate(fps){
//     this.p5.frameRate(fps);
//     return this;
//   }
//   append(...items){
//     for(const item of items){
//         this.items.push(item);
//         item.cache.renderer = this;
//     }
//     return this;
//   }
//   remove(...items){
//     this.items = [...new Set(this.items).difference(new Set(items))];
//     items.forEach(n=>n.cache.renderer = null);
//     return this;
//   }
//   drawOnce(){
//     this.p5.redraw();
//     return this;
//   }
//   pause(){
//     this.p5.noLoop();
//     this.cache.isPaused = true;
//     return this;
//   }
//   resume(){
//     this.p5.loop();
//     this.cache.isPaused = false;
//     return this;
//   }
//   clear(){
//     this.p5.clear();
//     return this;
//   }
// }
// import { P2D } from "p5"
import { ZikoP5Canvas } from "./canvas.js";
import { Matrix } from "ziko"
class ZikoP5Canvas2D extends ZikoP5Canvas{
  constructor(...items){
    super("p2d",mode_dependent_drawing_callback, ...items)
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
    this.cache.transormationMatrix.set(0, 0, sx);
    this.cache.transormationMatrix.set(0, 1, 0);
    this.cache.transormationMatrix.set(1, 0, 0);
    this.cache.transormationMatrix.set(1, 1, -sy);
    this.cache.transormationMatrix.set(2, 0, tx);
    this.cache.transormationMatrix.set(2, 1, ty);
    return this;
  }
}
function mode_dependent_drawing_callback(p){
    p.applyMatrix(this.cache.transormationMatrix.arr.flat(1))
}
const Canvas2D = (...items) => new ZikoP5Canvas2D(...items);
export { ZikoP5Canvas2D, Canvas2D };
