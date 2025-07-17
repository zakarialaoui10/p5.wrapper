import {Flex, cos, sin, PI} from "ziko"
import Hello from "./components/Hello.js"
import { P5Canvas2D, Circle } from "p5.wrapper/ziko"
globalThis.Circle = Circle
globalThis.c1 = Circle(0, 0, 20) 
globalThis.c = P5Canvas2D(
  c1
).view(-150, -150, 150, 150)
c.setCustomLoopCallback(e=>{
  c1.posX(100*cos(e.iter*PI/50))
  c1.posY(100*sin(e.iter*PI/50))
})

Flex(
  Hello({name : "world"}),
  c
).size("100vw","100vh").vertical(0, 0).style({
  background : "darkblue",
  color : "gold",
  margin : "0px",
  overflow : "hidden"
})