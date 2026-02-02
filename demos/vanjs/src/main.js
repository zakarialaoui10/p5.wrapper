import { cos, sin, PI} from 'ziko/math'
import { Canvas2D, Canvas3D, box, circle, line, triangle } from "p5.wrapper/van"

import p5 from "p5"

globalThis.v = new p5.Vector(0, 10, 100)
globalThis.c1 = circle(0, 0, 20) 
globalThis.l1 = line(-50, -50, 50, -50)
globalThis.c = Canvas2D(
  c1,
  l1,
  triangle(-50, -50, 50, -50, 0, 100)
)
.view(-100, -100, 100, 100)

document.body.append(c.element)