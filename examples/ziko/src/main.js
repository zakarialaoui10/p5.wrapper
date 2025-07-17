import {Flex, cos, sin, PI} from "ziko"
import Hello from "./components/Hello.js"
import { P5Canvas2D, circle, line, triangle } from "p5.wrapper/ziko"
globalThis.circle = circle
globalThis.c1 = circle(0, 0, 20) 
globalThis.l1 = line(-50, -50, 50, -50)
globalThis.c = P5Canvas2D(
  c1,
  l1,
  triangle(-50, -50, 50, -50, 0, 100)
).view(-150, -150, 150, 150)
c.setCustomLoopCallback(e=>{
  c1.posX(100*cos(e.iter*PI/50))
  c1.posY(100*sin(e.iter*PI/50))
  // l1.posY(50* sin(e.iter *PI/20), 50* sin(e.iter *PI/20))
  // l1.translateY(e.iter/10)
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