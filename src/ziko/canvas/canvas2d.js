import { ZikoUIElement, waitForUIElm, cos, sin, PI } from "ziko";
import p5  from "p5";
class ZikoP5Canvas2D extends ZikoUIElement {
  constructor(...items) {
    super("div");
    Object.assign(this.cache,{
        iter: 0,
        loop_callback : null
    })
    this.size("300px","300px")
    this.style({
        outline : "1px red solid",  
    })
    this.items = [];
    this.p5 = new p5((p) => {
      p.setup = () => {
        p.createCanvas(this.width, this.height).parent(
          this.element,
        );
        p.frameRate(30);
      };
      p.draw = () => {
        p.clear();
        this.items.forEach((shape) => {
            shape.draw(p)
            this.cache.loop_callback?.call(null, this);
            // shape.posX(150+100*cos(this.iter*PI/50))
            // shape.posY(150+100*sin(this.iter*PI/50))
        });
        this.cache.iter += 1;
      };
    });
    this.append(...items)
  }
  get iter(){
    return this.cache.iter;
  }
  get xMin(){
    return this.cache.xMin;
  }
  get xMax(){
    return this.cache.xMax;
  }
  get yMin(){
    return this.cache.yMin;
  }
  get yMax(){
    return this.cache.yMax;
  }
  view(xMin = 0, xMax = this.width, yMin = 0, yMax = this.height){
    this.cache.xMax = xMin;
    this.cache.xMax = xMax;
    this.cache.yMin = yMin; 
    this.cache.yMax = yMax;
    return this;
  }
  setCustomLoopCallback(callback){
    this.cache.loop_callback = callback;
    return this;
  }
  frameRate(fps){
    this.p5.frameRate(fps);
    return this;
  }
  append(...items){
    for(const item of items){
        this.items.push(item);
        item.cache.renderer = this;
    }
    return this;
  }
  remove(...items){
    this.items = [...new Set(this.items).difference(new Set(items))];
    items.forEach(n=>n.cache.renderer = null);
    return this;
  }
}

const P5Canvas2D = (...items) => new ZikoP5Canvas2D(...items);
export { ZikoP5Canvas2D, P5Canvas2D };
