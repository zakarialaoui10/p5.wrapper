import { ZikoP5Canvas } from "./canvas.js";
class ZikoP5Canvas3D extends ZikoP5Canvas{
  constructor(...items){
    super("webgl",mode_dependent_drawing_callback, ...items);
    Object.assign(this.cache,{
      use_orbit : false,
    })
  }
  useOrbitControls(optios){
    this.cache.use_orbit = true;
    return this;
  }
}
function mode_dependent_drawing_callback(p){
  if(this.cache.use_orbit) p.orbitControl();
}

const Canvas3D = (...items) => new ZikoP5Canvas3D(...items);
export { ZikoP5Canvas3D, Canvas3D };