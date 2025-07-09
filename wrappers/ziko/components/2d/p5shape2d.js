import { ZikoP5Shape } from "../shape.js";
class ZikoP5Shape2D extends ZikoP5Shape{
    constructor(x, y){
        super(x, y);
    }
    draw(p){
        p.push();
        ['stroke', 'fill'].forEach(method=>{
            if(this.cache[method]!==null){
                p[method](this.cache[method]);
            }
        })
        this.__draw_geo__(p);
        p.pop();
    }
}
export{
    ZikoP5Shape2D
}