import { UIP5Canvas } from "./canvas.js";
class UIP5Canvas3D extends UIP5Canvas{
  constructor(...items){
    super("webgl", mode_dependent_drawing_callback, ...items);
    Object.assign(this.cache,{
      use_orbit : false,
    })
  }
  useOrbitControls(options){
    this.cache.use_orbit = true;
    return this;
  }
}
function mode_dependent_drawing_callback(p){
  if(this.cache.use_orbit) p.orbitControl();
}

const Canvas3D = (...items) => new UIP5Canvas3D(...items);
export { UIP5Canvas3D, Canvas3D };