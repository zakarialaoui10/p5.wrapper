import { ZikoUIElement, waitForUIElm } from "ziko";
import p5  from "p5";
class ZikoP5Canvas2D extends ZikoUIElement {
  constructor(...children) {
    super("div");
    this.size("300px","150px")
    this.style({
        outline : "1px red solid",  
    })
    this.items = [];
    this.context = {
      register: (item) => {
        this.items.push(item)
      }, 
      unregister: (item) => {
        const index = this.items.indexOf(item);
        if (index !== -1) this.items.splice(index, 1);
      },
      canvas : this
    };
    this.p5 = new p5((p) => {
      p.setup = () => {
        p.createCanvas(this.width, this.height).parent(
          this.element,
        );
      };
      p.draw = () => {
        p.clear();
        this.items.forEach((shape) => shape.draw(p));
      };
    });
    this.append(...children)
  }
  view(xMin, xMax, yMin, yMax){

    return this;
  }
  append(...items){
    // console.log(this.width)
    for(const item of items){
        this.items.push(item)
    }
    return this;
  }
}

const P5Canvas2D = (...children) => new ZikoP5Canvas2D(...children);
export { ZikoP5Canvas2D, P5Canvas2D };
