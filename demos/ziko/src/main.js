// import {Flex, cos, sin, PI} from "ziko"
// import Hello from "./components/Hello.js"
import { cos, sin, PI} from 'ziko/math'
import { Canvas2D, Canvas3D, box, circle, line, triangle } from "p5.wrapper/ziko"

import p5 from "p5"

globalThis.v = new p5.Vector(0, 10, 100)
globalThis.c1 = circle(0, 0, 20) 
globalThis.l1 = line(-50, -50, 50, -50)
globalThis.c = Canvas2D(
  c1,
  l1,
  // triangle(-50, -50, 50, -50, 0, 100)
)

// c.add(c1, l1)

c.mount(document.body)
.view(-150, -150, 150, 150)
c.setCustomLoopCallback(e=>{
  c1.posX(100*cos(e.iter*PI/50))
  c1.posY(100*sin(e.iter*PI/50))
  // l1.posY(50* sin(e.iter *PI/20), 50* sin(e.iter *PI/20))
  // l1.translateY(e.iter/10)
})

globalThis.c = Canvas3D(
  box(10, 0, 0, 200, 200, 200)
).useOrbitControls()
// Flex(
//   Hello({name : "world"}),
//   c
// ).size("100vw","100vh").vertical(0, 0).style({
//   background : "darkblue",
//   color : "gold",
//   margin : "0px",
//   overflow : "hidden"
// })