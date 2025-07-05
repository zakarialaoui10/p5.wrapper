class ZikoP5Shape2D{
    constructor(x, y){
        this.cache = {
            uuid: crypto.randomUUID(),
            renderer : null,
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