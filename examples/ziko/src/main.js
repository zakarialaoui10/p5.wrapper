import {Flex, cos, PI} from "ziko"
import Hello from "./components/Hello.js"
import { P5Canvas2D, P5Circle } from "p5.wrapper/ziko"
globalThis.Circle = P5Circle
globalThis.c1 = Circle(0, 0, 30) 
console.log(c1)
globalThis.c = P5Canvas2D(
  c1
)
console.log(c.width)
Flex(
  Hello({name : "world"}),
  c
).size("100vw","100vh").vertical(0, 0).style({
  background : "darkblue",
  color : "gold",
  margin : "0px",
  overflow : "hidden"
})