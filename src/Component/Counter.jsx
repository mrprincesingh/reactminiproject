import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count , setCount] = useState(0)
  
    const handleAdd = () =>{
     setCount((prev)=> prev + 1)
    }
    const handleDecrease = () =>{
        setCount((prev)=> prev - 1) 
    }
    const handleDouble = () =>{
        setCount((prev)=> prev * 2)
    }

  return <div>
     
         <h1>{count}</h1>

     <button onClick={handleAdd}>Add </button>
     <button onClick={handleDecrease} >Decrease</button>
     <button onClick={handleDouble}>Double</button>
    </div>
  
}

export default Counter