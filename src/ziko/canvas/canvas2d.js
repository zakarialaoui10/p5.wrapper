import { ZikoUIElement, waitForUIElm, cos, sin, PI } from "ziko";
import p5  from "p5";
class ZikoP5Canvas2D extends ZikoUIElement {
  constructor(...children) {
    super("div");
    Object.assign(this.cache,{
        iter: 0,
    })
    this.size("300px","300px")
    this.style({
        outline : "1px red solid",  
    })
    this.items = [];
    // this.context = {
    //   register: (item) => {
    //     this.items.push(item)
    //   }, 
    //   unregister: (item) => {
    //     const index = this.items.indexOf(item);
    //     if (index !== -1) this.items.splice(index, 1);
    //   },
    //   canvas : this
    // };
    this.p5 = new p5((p) => {
      p.setup = () => {
        p.createCanvas(this.width, this.height).parent(
          this.element,
        );
      };
      p.draw = () => {
        p.clear();
        this.items.forEach((shape) => {
            shape.draw(p)
            // shape.posX(150+100*cos(this.iter*PI/50))
            // shape.posY(150+100*sin(this.iter*PI/50))
        });
        this.cache.iter += 1;
      };
    });
    this.append(...children)
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

const P5Canvas2D = (...children) => new ZikoP5Canvas2D(...children);
export { ZikoP5Canvas2D, P5Canvas2D };
