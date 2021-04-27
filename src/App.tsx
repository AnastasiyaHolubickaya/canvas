import React from 'react';
import {Canvas} from "./components/Canvas";
import './App.css';
import {useSelector} from "react-redux";
import {getCanvasSizeReselect} from "./redux/selectors";

function App() {
  const [width, height] = useSelector(getCanvasSizeReselect);

  return (
        <Canvas width={width} height={height}/>
  )
}
export default App;
