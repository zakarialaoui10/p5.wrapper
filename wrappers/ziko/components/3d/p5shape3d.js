import { ZikoP5Shape } from "../shape.js";
class ZikoP5Shape3D extends ZikoP5Shape{
    constructor(x, y, z){
        super(x, y);
        Object.assign(this.cache,{
            z
        })
    }
}
export{
    ZikoP5Shape3D
}