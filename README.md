# p5.wrapper
A lightweight declarative wrapper for p5.js that lets you build interactive sketches using Web Components or frameworks like Zikojs, React, VanJS...

All implementations are built on top of [ZikoJS](https://github.com/zaknafein99/zikojs), which acts as a bridge between the Instance mode of `p5.js` and the declarative structure of modern UI frameworks. 
This makes it easy to use `p5` in a component-based way while keeping full control of the drawing logic.


## API 
### Scenes
 - `P5Canvas2D(...shapes)`
 - `P5Canvas3D(...shapes)`
### Shapes 
 - `P5Circle({x, y, r})`
 - `P5Rect({x, y, w, h})`
 - `P5Ellipse({x, y, r1, r2})`

**🧩 Usage Note :**
In `ZikoJS`, `VanJS`, and other environments that follow a hyperscript approach, both `P5Canvas2D` / `P5Canvas3D` and shape components support chainable methods for declarative configuration.
These methods allow you to set properties like size, style, and behavior directly through a fluent API:

```js
P5Canvas2D(
    P5Circle({ x: 0, y: 0, r: 50 })
  ).fill('red')
  .view(-100, -100, 100, 100)
  .style({border: "1px solid blue"});
```
In `React`, `Svelte`, `Vue`, and other modern frameworks that use JSX or template-based approaches, canvas configuration is done through props, offering the same capabilities as chainable methods used in hyperscript-based environments.

```jsx
<P5Canvas2D style={{border:"1px solid blue"}} view={[-100, -100, 100, 100]}>
    <P5Circle x={0} y={0} r={50} fill='red'/>
<P5Canvas2D/>
```

## Implementations 
|Library|Implementation|Status|
|-|-|-|
|[Zikojs]()|[p5.wrapper/ziko](wrappers/ziko/readme.md)| In Progress ..
|[Vanjs]()|[p5.wrapper/van](wrappers/van/readme.md)| In Progress ..
|[React]()|[p5.wrapper/react](wrapper/react/readme.me)| In Progress ..
|[Svelte]()|| To Do 
|[Vue]()|| To Do
|[Solid]()|| To Do 
|[Preact]()|| To Do 
|[Astro]()|| To Do 

# ⭐️ Show your support <a name="support"></a>

If you appreciate the library, kindly demonstrate your support by giving it a star!<br>
[![Star](https://img.shields.io/github/stars/zakarialaoui10/p5.wrapper?style=social)](https://github.com/zakarialaoui10/p5.wrapper)
<!--## Financial support-->
# License 
This projet is licensed under the terms of MIT License 
<img src="https://img.shields.io/github/license/zakarialaoui10/p5.wrapper?color=rgb%2820%2C21%2C169%29" width="100" align="right">