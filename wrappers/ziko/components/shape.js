class ZikoP5Shape{
    constructor(coordinates = []){
        this.cache = {
            uuid: crypto.randomUUID(),
            renderer : null,
            // stroke : null,
            // fill : null,
            geometry : {
                coordinates
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
        this.cache.geometry.coordinates[0] = x;
        return this;
    }
    posY(y){
        this.cache.geometry.coordinates[1] = y;
        return this;
    }
    translateX(dx){
        this.cache.geometry.coordinates[0] += dx;
        return this;
    }
    translateY(dy){
        this.cache.geometry.coordinates[1] += dy;
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