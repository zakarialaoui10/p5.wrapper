import van from "vanjs-core";
import { ZikoUIElement } from "ziko"

const originalTags = van.tags;
const originalAdd = van.add;


van.tags = new Proxy(originalTags, {
  get(target, tagName, receiver) {
    const originalTagFn = Reflect.get(target, tagName, receiver)
    return (...args) => {
      for(let i=0; i<args.length; i++) if(args[i] instanceof ZikoUIElement) args[i] = args[i].element
      const element = originalTagFn(...args)
      return element
    }
  }
});

van.add = (dom, ...children) =>{
  children = children.map(child=>{
    if(child instanceof ZikoUIElement) return child.element;
    return child;
  })
  console.log({children})
  return originalAdd(dom, ...children)
}


// import "ziko-wrapper/van"
export * from "../ziko/index.js";