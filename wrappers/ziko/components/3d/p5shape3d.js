import { UIP5Shape } from "../shape.js";
class UIP5Shape3D extends UIP5Shape{
    constructor(x, y, z){
        super(x, y);
        Object.assign(this.cache,{
            z
        })
    }
}
export{
    UIP5Shape3D
}