import { ZikoUIElement } from "ziko";
import p5  from "p5";
class ZikoP5Canvas2D extends ZikoUIElement {
  constructor(...children) {
    super("div");
    this.size("70%","150px")
    this.style({
        outline : "1px red solid",
        
    })
    this.drawFns = [];
    this.context = {
      register: (fn) => this.drawFns.push(fn), 
      unregister: (fn) => {
        const index = this.drawFns.indexOf(fn);
        if (index !== -1) this.drawFns.splice(index, 1);
      },
    };
    this.p5 = new p5((p) => {
      p.setup = () => {
        p.createCanvas(this.width, this.height).parent(
          this.element,
        );
      };
      p.draw = () => {
        p.clear();
        this.drawFns.forEach((fn) => fn(p));
      };
    });
    this.append(...children)
  }
  append(...items){
    for (const item of items) (typeof item === "function") && item(this.context);
    return this;
  }
}

const P5Canvas2D = (...children) => new ZikoP5Canvas2D(...children);
export const Circle = ({ x, y, r }) => (ctx) => {
  const drawFn = (p) => p.ellipse(x, y, r * 2);
  ctx.register(drawFn);

  console.log(ctx)
  return null;
};
export { ZikoP5Canvas2D, P5Canvas2D };
