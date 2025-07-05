import {Flex} from "ziko"
import Hello from "./components/Hello.js"
import { P5Canvas2D, Circle } from "p5.wrapper/ziko"
globalThis.c = P5Canvas2D(
  Circle({x:50, y:50, r:20})
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