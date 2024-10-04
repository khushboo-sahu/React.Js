import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setCount]=useState(0)

  const addValue =()=>{
   count = count +1;
   setCount(count);
  }
 
  const removeValue=()=>{
    count=count - 1;
    setCount(count);
  }

  return (
    <>
    <h1>Counter</h1>
    <h3>Counter Value:{count}</h3>
    <button onClick={addValue}>Increment : </button> <br/>
    <button onClick={removeValue}>Decrement</button>
    </>
  )
}

export default App
