
const FunctionalComponents = () => {
  return (
    <div>
        FunctionalComponent
      
    </div>
  )
}

export default FunctionalComponents



// another
import { useState } from "react"
function App(){
  const[count,setCount]=useState(0)
  const[price,setPrice]=useState(50)
  const[msg , setMsg]=useState('Buy')
  // const[color,setColor]=useState('red')
  // const[msg,setMsg]=useState('Subscribe🔔')
  return(
      <div className="App">
        {/* <h1>Counter</h1>
        <h2 style={{color:`${color}`, backgroundColor:`${'black'}`}}>{count}</h2>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setColor('green')}>green</button>
        <button onClick={()=>setMsg('Subscribed')}>{msg}</button> */}
        <div className="div1">
        <h1>Counter</h1>
        
        <button onClick={()=>setCount(count+1)}>+</button>
        <span>  {count} </span>
        <button onClick={()=>setCount(count-1)}>-</button>
        <br /><br />
        <button onClick={()=>setPrice(50*count)}>Price</button>
        <h2>{price}</h2>
        <button onClick={()=>setMsg("thanks for visiting")}>{msg}</button>
        </div>
        </div>
     )}