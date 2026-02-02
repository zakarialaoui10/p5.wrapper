import { UIElement } from "ziko/ui";
import p5  from "p5";
export class UIP5Canvas extends UIElement {
  constructor(mode, mode_dependent_drawing_callback, ...items) {
    super({element : 'div'});
    Object.assign(this.cache,{
        iter: 0,
        loop_callback : null,
        isPaused : false,
    })
    this.size("300px","300px")
    this.style({
        outline : "2px darkblue dotted",
        borderRadius : '1rem',
        margin : '10px'  
    })
    this.items = [];
    this.p5 = new p5((p) => {
      p.setup = () => {
        p.createCanvas(this.width, this.height, mode).parent(this.element);
        p.frameRate(30);
      };
      p.draw = () => {
        p.clear();
        mode_dependent_drawing_callback.call(this, p);
        this.items.forEach((shape) => {
            // shape.maintain(p)
            shape.draw(p)
            this.cache.loop_callback?.call(null, this);
        });
        this.cache.iter += 1;
      };
    });
    this.add(...items)
  }
  get iter(){
    return this.cache.iter;
  }
  get sf(){
    return this.cache.scaleFactor;
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
  get fps(){
    return this.p5.getFrameRate();
  }
  get isPaused(){
    return this.cache.isPaused;
  }
  setCustomLoopCallback(callback){
    this.cache.loop_callback = callback;
    return this;
  }
  frameRate(fps){
    this.p5.frameRate(fps);
    return this;
  }
  add(...items){
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
  drawOnce(){
    this.p5.redraw();
    return this;
  }
  pause(){
    this.p5.noLoop();
    this.cache.isPaused = true;
    return this;
  }
  resume(){
    this.p5.loop();
    this.cache.isPaused = false;
    return this;
  }
  clear(){
    this.p5.clear();
    return this;
  }
}
