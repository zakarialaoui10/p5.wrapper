import './App.css';
import { P5Circle } from "p5.wrapper/ziko";
import { P5Canvas2D } from 'p5.wrapper/react';

function App(){
  return (
    <P5Canvas2D clear sx={[1,2,3,4]} style={{border : "2px red solid"}}>
      <P5Circle x={50} y={50} r={50} />
    </P5Canvas2D>
  )
}

export default App
