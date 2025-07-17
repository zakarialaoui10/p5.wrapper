import './App.css';
import { P5Circle } from "p5.wrapper/ziko";
import { P5Canvas2D } from 'p5.wrapper/react';
import { useRef, useEffect, useState } from 'react';

// function App(){
//   const canvasRef = useRef();
//   const [view, setView] = useState([-100, -100, 100, 100])
//   const [isCleared, clear] = useState(false)
//   const call = () => {
//     console.log("clear")
//     clear(true)
//     // const rand = Math.floor(Math.random()*100)
//     // setView([
//     //   -rand, 
//     //   -rand,
//     //   rand,
//     //   rand
//     // ])
//   }
//   return (
//     <P5Canvas2D onClick={call} clear ref={canvasRef} view={view} style={{border : "2px red solid"}}>
//       <P5Circle x={0} y={0} r={50} />
//     </P5Canvas2D>
//   )
// }

function App() {
  const canvasRef = useRef();
  const [view, setView] = useState([-100, -100, 100, 100]);
  const [isCleared, clear] = useState(false);

  // const call = () => {
  //   console.log("clear");
  //   clear(true); // Trigger clear
  // };

  //   const call = () => {
  //   const rand = Math.floor(Math.random()*100)
  //   setView([
  //     -rand, 
  //     -rand,
  //     rand,
  //     rand
  //   ])
  // }

  // useEffect(() => {
  //   console.log({UI})
  //   if (isCleared) {
  //     // After triggering clear, reset it
  //     clear(false);
  //   }
  // }, [isCleared]);

  //  useEffect(() => {
  //   const UI = canvasRef.current?.UI;
  //   const rand = Math.floor(Math.random()*100)
  //   setView([
  //     -rand, 
  //     -rand,
  //     rand,
  //     rand
  //   ])
  //   UI.onClick(e=>e.target.view(-rand, -rand, rand, rand))
  //   console.log({UI})
  // }, []);

  function handleClick() {
    const UI = canvasRef.current?.UI;
    const rand = Math.floor(Math.random()*100)
    UI.view(-rand, -rand, rand, rand)
    globalThis.UI = UI
  }
  function clearCanvas() {
    const UI = canvasRef.current?.UI;
    UI.clear()
  }

  return (
    <>
    <P5Canvas2D
      // onClick={call}
      // clear={isCleared}
      ref={canvasRef}
      view={view}
      style={{ border: "2px red solid" }}
    >
      <P5Circle x={0} y={0} r={50} />
    </P5Canvas2D>
    <button onClick={handleClick}>Change View</button>
    <button onClick={clearCanvas}>Clear The canvas</button>
    </>
  );
}


export default App
