import van from "vanjs-core";
import "./App.css";
import {cos, sin, PI } from "ziko"
import Technologies from "./technologies.js";

import { P5Canvas2D, P5Circle } from "p5.wrapper/van";
const c1 = P5Circle(0, 0, 30) 
const c = P5Canvas2D(
  c1
).size("100%")
c.setCustomLoopCallback(e=>{
  c1.posX(150+100*cos(e.iter*PI/50))
  c1.posY(150+100*sin(e.iter*PI/50))
})

const { div, h5, img, p, a } = van.tags;
const Tech = (Tech_Name) => {
  const {icon, url} = Technologies[Tech_Name]
  return a(
      { href: url, target: "_blank" },
      img({
        src: icon,
        class: "logo",
        alt: `${Tech_Name} logo`,
        width: 96,
        height: 96,
      }),
    )
  }
export const App = () => {
  return div(
    Tech("vanjs"),
    Tech('vitejs'),
    Tech('zikojs'),
    Tech('p5js'),
    p(
      "Hello VanJS users! This is a p5 canvas powered by p5.wrapper, a wrapper built on top of ZikoJS",
    ),
    c,
    p({ class: "read-the-docs" }, "Click on the VanJS logo to learn more"),
  );
};

const root = document.getElementById("app");

van.add(root, App());
