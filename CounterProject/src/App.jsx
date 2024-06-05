import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  //let counter = 10;
  const addValue = () =>{
    console.log("value added");
    if(counter < 20)
      setCounter(counter+1)
  }
  function removeValue(){
    if(counter > 0)
      setCounter(counter-1);
  }
  return (
    <>
      <h1>Free Palestine</h1>
      <h1>Counter: {counter}</h1>
      <button onClick={addValue}>Add Count</button>
      <button onClick={removeValue}>Remove Count</button>
    </>
  );
}

export default App
