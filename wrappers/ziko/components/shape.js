class ZikoP5Shape{
    constructor(x, y){
        this.cache = {
            uuid: crypto.randomUUID(),
            renderer : null,
            // stroke : null,
            // fill : null,
            geometry : {
                x,
                y
            },
            material : {
                stroke : null,
                fill : null
            }
        }
    }
    get uuid(){
        return this.cache.uuid;
    }
    get renderer(){
        return this.cache.renderer;
    }
    // maintain(p){
    //     // ['stroke', 'fill'].forEach(method=>{
    //     //     if(this.cache[method]!==null){
    //     //         // console.log(p[method])
    //     //         // console.log(this.cache[method])
    //     //         p[method](this.cache[method]);
    //     //         // p["stroke"](198)
    //     //     }
    //     // })
    //     return this;
    // }
    stroke(color){
        this.cache.material.stroke = color;
        return this;
    }
    fill(color){
        this.cache.material.fill = color;
        return this;
    }
    posX(x){
        this.cache.geometry.x = x;
        return this;
    }
    posY(y){
        this.cache.geometry.y = y;
        return this;
    }
    translateX(dx){
        this.cache.geometry.x += dx;
        return this;
    }
    translateY(dy){
        this.cache.geometry.y += dy;
        return this;
    }
    rotateX(){

    }
    rotateY(){

    }
}
export{
    ZikoP5Shape
}