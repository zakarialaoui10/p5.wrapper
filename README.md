# p5.wrapper
A lightweight declarative wrapper for p5.js that lets you build interactive sketches using Web Components or frameworks like Zikojs, React, VanJS...

All implementations are built on top of [ZikoJS](https://github.com/zaknafein99/zikojs), which acts as a bridge between the Instance mode of `p5.js` and the declarative structure of modern UI frameworks. 
This makes it easy to use `p5` in a component-based way while keeping full control of the drawing logic.


## API 
### Scenes
 - P5Canvas2D(...shapes)
 - P5Canvas3D(...shapes)
### Shapes 
 - P5Circle 
 - P5Rect 
 - P5Ellipse

## Implementations 
|Library|Implementation|Status|
|-|-|-|
|[Zikojs]()|[p5.wrapper/ziko](wrappers/ziko/readme.md)| In Progress
|[Vanjs]()|[p5.wrapper/van](wrappers/van/readme.md)| In Progress
|[React]()|| To Do
|[Svelte]()|| To Do 
|[Vue]()|| To Do
|[Solid]()|| To Do 
|[Preact]()|| To Do 
