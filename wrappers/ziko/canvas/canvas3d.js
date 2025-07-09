import { ZikoP5Canvas } from "./canvas.js";
class ZikoP5Canvas3D extends ZikoP5Canvas{
  constructor(...items){
    super("webgl", ...items)
  }
  useOrbitCoontrols(){

  }
}

const P5Canvas3D = (...items) => new ZikoP5Canvas3D(...items);
export { ZikoP5Canvas3D, P5Canvas3D };