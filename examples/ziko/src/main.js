import {Flex, cos, sin, PI} from "ziko"
import Hello from "./components/Hello.js"
import { P5Canvas2D, P5Circle } from "p5.wrapper/ziko"
globalThis.Circle = P5Circle
globalThis.c1 = Circle({x:0, y:0, r:0.5}) 
globalThis.c = P5Canvas2D(
  c1
)
// c.setCustomLoopCallback(e=>{
//   c1.posX(150+100*cos(e.iter*PI/50))
//   c1.posY(150+100*sin(e.iter*PI/50))
// })

Flex(
  Hello({name : "world"}),
  c
).size("100vw","100vh").vertical(0, 0).style({
  background : "darkblue",
  color : "gold",
  margin : "0px",
  overflow : "hidden"
})