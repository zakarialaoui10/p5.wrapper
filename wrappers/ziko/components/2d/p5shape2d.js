import { ZikoP5Shape } from "../shape.js";
class ZikoP5Shape2D extends ZikoP5Shape{
    constructor(x, y){
        super(x, y);
    }
    draw(p){
        p.push();
        for(let key in this.cache.material){
            if(this.cache.material[key]!==null) p[key](this.cache.material[key]);
        }
        this.__draw_geo__(p);
        p.pop();
    }
}
export{
    ZikoP5Shape2D
}