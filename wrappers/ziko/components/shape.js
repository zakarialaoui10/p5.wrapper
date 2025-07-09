class ZikoP5Shape{
    constructor(x, y){
        this.cache = {
            uuid: crypto.randomUUID(),
            renderer : null,
            stroke : null,
            fill : null,
            x,
            y,
        }
        // this.cache.x = x;
        // this.cache.y = y;
    }
    get uuid(){
        return this.cache.uuid;
    }
    get renderer(){
        return this.cache.renderer;
    }
    maintain(p){
        // ['stroke', 'fill'].forEach(method=>{
        //     if(this.cache[method]!==null){
        //         // console.log(p[method])
        //         // console.log(this.cache[method])
        //         p[method](this.cache[method]);
        //         // p["stroke"](198)
        //     }
        // })
        return this;
    }
    stroke(color){
        this.cache.stroke = color;
        return this;
    }
    fill(color){
        this.cache.fill = color;
        return this;
    }
    posX(x){
        this.cache.x = x;
        return this;
    }
    posY(y){
        this.cache.y = y;
        return this;
    }
    translateX(dx){
        this.cache.x += dx;
        return this;
    }
    translateY(dy){
        this.cache.y += dy;
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