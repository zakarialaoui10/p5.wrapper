import './App.css';
import { P5Circle } from "p5.wrapper/ziko";
import { P5Canvas2D } from 'p5.wrapper/react';
import { useRef, useEffect, useState } from 'react';

function App(){
  const canvasRef = useRef();
  const [view, setView] = useState([-100, -100, 100, 100])
  const call = () => {
    const rand = Math.floor(Math.random()*100)
    setView([
      -rand, 
      -rand,
      rand,
      rand
    ])
  }
  return (
    <P5Canvas2D onClick={call} ref={canvasRef} view={view} style={{border : "2px red solid"}}>
      <P5Circle x={0} y={0} r={50} />
    </P5Canvas2D>
  )
}

export default App
