import React, { useState } from 'react';
export default function Counter({initialValue})
{
    //console.log(props)
    // return `You are ${props.name}`

      //const counter = 3;
  const [count, setCount] = useState(0);// initial value of count =0
  //    [state(value),  setState(function)]
  console.log("coun value", count)
  // const x = useState(); email = x[0] setEmail[1]

  const handleClick = (val) => {
    
    setCount(count+val)
    //console.log("Button clicked", counter)
  }

    return <div>
         <h2>Count : {count}</h2>
        <button onClick={()=>{handleClick(1)}}>Add 1</button>
        <button onClick={()=>{handleClick(2)}}>Add 2</button>
    </div>
}