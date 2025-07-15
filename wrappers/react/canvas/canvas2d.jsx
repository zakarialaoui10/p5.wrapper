// import React, {
//   Children,
//   forwardRef,
//   useRef,
//   useImperativeHandle,
//   useEffect
// } from 'react';

// import { ZikoWrapper } from "ziko-wrapper/react";
// import { P5Canvas2D as Canvas2D } from "p5.wrapper/ziko";

// export const P5Canvas2D = forwardRef(({ children, ...props }, ref) => {
//   const uiRef = useRef(null);
//   const items = Children.toArray(children).map(n => n.type(n.props));

//   const __P5Canvas2D__ = () => {
//     // Create UI once
//     if (!uiRef.current) {
//       const UI = Canvas2D(...items).view(-100, -100, 100, 100).unrender();

//       for (let key in props) {
//         switch (key) {
//           case "clear": console.log(props[key]); break;
//           case "view": setTimeout(() => UI.view(...props[key]), 50); break;
//           default: UI[key]?.(props[key]); break;
//         }
//       }

//       uiRef.current = UI;
//     }

//     return uiRef.current;
//   };

//   // Expose UI externally
//   useImperativeHandle(ref, () => ({
//     getUI: () => uiRef.current,
//     ...uiRef.current // optional
//   }), [uiRef.current]);

//   return (
//     <ZikoWrapper>
//       <__P5Canvas2D__ />
//     </ZikoWrapper>
//   );
// });







import { Children } from 'react'
import {ZikoWrapper} from "ziko-wrapper/react"
import {P5Canvas2D as Canvas2D} from "p5.wrapper/ziko";


export function P5Canvas2D({children, ...props }){
  const items = Children.toArray(children).map(n=>n.type(n.props));
  const __P5Canvas2D__ = () => {
    const UI = Canvas2D(...items).view(-100, -100, 100, 100).unrender();
    for(let key in props){
      // console.log(props[key])
      switch(key){
        case "clear": console.log(props[key]) ; break;
        case "view" : setTimeout(()=>UI.view(...props[key]), 10); break;
        default : UI[key]?.(props[key]); break;
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