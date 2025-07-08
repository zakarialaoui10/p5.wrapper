import { Children } from 'react'
import {ZikoWrapper} from "ziko-wrapper/react"
import {P5Canvas2D as Canvas2D} from "p5.wrapper/ziko";


export function P5Canvas2D({children, ...props }){
  const items = Children.toArray(children).map(n=>n.type(n.props));
  const __P5Canvas2D__ = () => {
    const UI = Canvas2D(...items).unrender();
    for(let key in props){
      console.log(key)
      switch(key){
        case "clear": console.log(props[key]) ; break;
      }
    }
    return UI
  }
  
  return(
    <ZikoWrapper>
      <__P5Canvas2D__/>
    </ZikoWrapper>
  )
}