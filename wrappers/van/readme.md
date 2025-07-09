# 📦 p5.wrapper – VanJS Integration

## Requirements 
 Zikojs 


## Installation 

```bash
 npm i ziko p5.wrapper
```

### Cdn : To Do

## API 
### Canvases
 `P5Canvas2D(...shapes)` : Creates a 2D p5.js canvas container.
 `P5Canvas2D(...shapes)` : 
### Shapes 
 `P5Circle(x, y, r)`
## Usage 

```js
import van from "vanjs-core"
import { cos, sin, PI } from "ziko"
import { P5Canvas2D, P5Circle } from "p5.wrapper/van"

const c1 = P5Circle(0, 0, 30)

const canvas = P5Canvas2D(c1).size("250px", "250px")

canvas.setCustomLoopCallback(e => {
  c1.posX(150 + 100 * cos(e.iter * PI / 50))
  c1.posY(150 + 100 * sin(e.iter * PI / 50))
})

van.add(document.body, canvas)

```

## Other Implementations
|Library|Implementation|Status|
|-|-|-|
|[Zikojs]()|[p5.wrapper/ziko](../ziko/readme.md)| In Progress
|[React]()|[p5.wrapper/react](../react/readme.md)| In Progress
|[Svelte]()|| To Do 
|[Vue]()|| To Do
|[Solid]()|| To Do 
|[Preact]()|| To Do 