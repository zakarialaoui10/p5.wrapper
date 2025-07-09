class ZikoP5Shape2D{
    constructor(x, y){
        this.cache = {
            uuid: crypto.randomUUID(),
            renderer : null,
            stroke : null,
            fill : null,
        }
        this.x = x;
        this.y = y;
    }
    get uuid(){
        return this.cache.uuid;
    }
    get renderer(){
        return this.cache.renderer;
    }
    maintain(p){
        ['stroke', 'fill'].forEach(method=>{
            if(this.cache[method]!==null){
                // console.log(p[method])
                // console.log(this.cache[method])
                p[method](this.cache[method]);
                // p["stroke"](198)
            }
        })
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
        this.x = x;
        return this;
    }
    posY(y){
        this.y = y;
        return this;
    }
    translateX(dx){
        this.x += dx;
        return this;
    }
    translateY(dy){
        this.y += dy;
        return this;
    }
    rotateX(){

    }
    rotateY(){

    }
}
export{
    ZikoP5Shape2D
}